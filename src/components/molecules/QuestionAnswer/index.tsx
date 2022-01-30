// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-implied-eval */
import { setTimeout } from 'timers';

import { Container, Paper, Typography, Modal as MUIModal, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import { Link } from 'react-router-dom';

import AnswerRequest from '../../../models/AnswerRequest';
import DescAndUrl from '../../../models/DescAndUrl';
import { QuestionDetailResponse, Tag } from '../../../models/QuestionDetailResponse';
import baseUrl from '../../../utils/ApiUrl';
import { ConvertAllCode, ConvertAllToNode, RunAssertions } from '../../../utils/shonagon';
import { Button } from '../../atoms/Button';
import { Editor } from '../../atoms/Editor';
import { Modal } from '../../atoms/Modal';

type QuestionAnswerProps = {
  question: QuestionDetailResponse;
};

type ExecuteResult = {
  result: any;
  isError: boolean;
};

function exe(code: string, args: string): ExecuteResult {
  if (code.indexOf('function') >= 0 && args === '') {
    // 関数ではあるが、引数が与えられていない場合
    // eslint-disable-next-line no-param-reassign
    args = '()';
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  let executor: Function;
  let errorLineNumberOffset = 0;
  if (args === '') {
    // 関数ではない場合
    errorLineNumberOffset = 7;
    executor = new Function(
      `
      const log__ = console.log;
      try {
        const results=[];
        console.log = (v) => {results.push(v)};
        ${code}
        return {
          result: results,
          error: null
        }
      } catch(e) {
        
        return {result: null, error: e}
      } finally {
        console.log = log__;
      }`
    );
  } else {
    errorLineNumberOffset = 4;
    executor = new Function(
      `try {
        return {
          result: (()=>{return(${code}${args})})(),
          error: null
        }
      } catch(e) {
        return {result: null, error: e}
    }`
    );
  }

  const result = executor();
  if (result.result !== null) {
    const isError = false;
    return { result: result.result, isError };
  }
  const isError = true;
  const message = `${result.error.name}: ${result.error.message}`;
  const parsed = result.error.stack.match(/<anonymous>:(\d+):(\d+)\)/);
  const [line, col] = [parsed[1] - errorLineNumberOffset, parsed[2]];
  return {
    result: `${message}\n    at Code (at line ${line}, column ${col})
        ${code.split('\n')[line - 1]}
${' '.repeat(7 + parseInt(col, 10))}^`,
    isError,
  };
}

export const QuestionAnswer: VFC<QuestionAnswerProps> = (props: QuestionAnswerProps) => {
  const { question } = props;
  const [code, setCode] = useState<string>('');
  const [corrects, setCorrects] = useState<boolean[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [timeOutModalOpen, setTimeOutModalOpen] = useState(false);
  const [urls, setUrls] = useState<DescAndUrl[]>([]);
  const handleClose = () => setOpen(false);
  const base = baseUrl();
  const storageItem = localStorage.getItem('chunagon_auth');
  let token = '';
  if (storageItem != null) {
    token = JSON.parse(storageItem);
  }
  const url = `${base}/answer?token=${token}`;

  const functionTag: Tag = {
    id: '3b227f55-7e77-4d48-8dc7-011681229497',
    name: '関数定義',
    tutorialLink: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions',
  };
  const TimeOutModal = () => {
    const style: SxProps<Theme> = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      whiteSpace: 'pre-wrap',
      overflowWrap: 'break-word',
    };

    return (
      <MUIModal
        open={timeOutModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            時間切れです 次の問題に移って下さい
          </Typography>
          <Link to="home">一覧に戻る</Link>
        </Box>
      </MUIModal>
    );
  };

  useEffect(() => {
    setCode(question.defaultCode);
    setTimeout(() => setTimeOutModalOpen(true), 600000);
  }, [question.defaultCode]);

  const execute = () => {
    if (question.tags.some((tag) => tag.name === functionTag.name)) {
      for (let index = 0; index < question.testCases.length; index += 1) {
        const args = question.testCases[index].input;
        try {
          const result = exe(code, args);
          results.push(result);
          if (`${result.result}` === question.testCases[index].expected) {
            corrects.push(true);
          }
          if (result.isError) {
            errorMessages.push(result.result);
          }
        } catch {
          setCorrects([]);
          setResults([]);
          setErrorMessages([]);
        }
      }
    } else {
      try {
        // eslint-disable-next-line no-eval
        const result = exe(code, '');
        for (let index = 0; index < question.testCases.length; index += 1) {
          if (result.result.join('\n') === question.testCases[index].expected) {
            corrects.push(true);
          }
          if (result.isError) {
            errorMessages.push(result.result);
          }
        }
      } catch {
        setCorrects([]);
        setResults([]);
        setErrorMessages([]);
      }
    }
    const newCode = ConvertAllCode(code) as string;
    const failedAssertions = RunAssertions(question, ConvertAllToNode(newCode)) as any[];
    const failedAssertionsId = failedAssertions.map((assertion) => assertion.id) as string[];
    if (failedAssertions.length === 0 && corrects.length === question.testCases.length) {
      const post: AnswerRequest = {
        questionID: question.questionID,
        isCorrect: true,
        isAssertionUsed: true,
        failedAssertions: [],
      };

      axios
        .post(url, JSON.stringify(post), {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {})
        .catch(() => {});
      setCorrects([]);
      setResults([]);
      setErrorMessages([]);
      setTitle('成功');
      setDetail('');
      setErrors([]);
      setUrls([]);
    } else {
      const post: AnswerRequest = {
        questionID: question.questionID,
        isCorrect: false,
        isAssertionUsed: true,
        failedAssertions: failedAssertionsId,
      };

      axios
        .post(url, JSON.stringify(post), {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {})
        .catch(() => {});
      setCorrects([]);
      setResults([]);
      const uniqueErrors = errorMessages.filter(
        (element, index, self) => self.findIndex((e) => e === element) === index
      );
      setErrors(uniqueErrors);
      setErrorMessages([]);
      setTitle('失敗');
      const message = failedAssertions.map((j) => j.message).join('\n');
      const tagUrlToName: DescAndUrl[] = [];
      failedAssertions.forEach((j) =>
        j.tags.forEach((tag: { tutorial_link: string; name: string }) => {
          tagUrlToName.push({
            desc: tag.name,
            url: tag.tutorial_link,
          });
        })
      );
      const uniqueUrls = tagUrlToName.filter(
        (element, index, self) => self.findIndex((e) => e.url === element.url) === index
      );
      setUrls(uniqueUrls);
      setDetail(message);
    }
    setOpen(true);
  };
  return (
    <Container component="main">
      <Paper
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3">{question.title}</Typography>
        <Typography variant="subtitle1">{question.description}</Typography>
        <Editor theme="solarized_dark" fontsize={14} value={code} onChange={setCode} />
        <Button value="実行" onClick={execute} sx={{ marginTop: 2, marginBottom: 8 }} />
        <p>{results}</p>
      </Paper>
      <Modal
        open={open}
        handleClose={handleClose}
        title={title}
        detail={detail}
        urls={urls}
        errors={errors}
      />
      <TimeOutModal />
    </Container>
  );
};
