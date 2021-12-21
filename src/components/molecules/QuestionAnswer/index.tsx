/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-implied-eval */
import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import AnswerRequest from '../../../models/AnswerRequest';
import { QuestionDetailResponse } from '../../../models/QuestionDetailResponse';
import { Editor } from '../../atoms/Editor';
import { useAuthUser } from '../../../context/UserAuthContext';
import { Button } from '../../atoms/Button';
import baseUrl from '../../../utils/ApiUrl';
import { ConvertAllCode, ConvertAllToNode, RunAssertions } from '../../../utils/shonagon';
import { Modal } from '../../atoms/Modal';

type QuestionAnswerProps = {
  question: QuestionDetailResponse;
};

export const QuestionAnswer: VFC<QuestionAnswerProps> = (props: QuestionAnswerProps) => {
  const { question } = props;
  const history = useHistory();
  const [code, setCode] = useState<string>('');
  const [corrects, setCorrects] = useState<boolean[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const authUser = useAuthUser();
  const token = authUser?.accessToken;
  const base = baseUrl();
  const url = `${base}/answer`;

  useEffect(() => {
    setCode(question.defaultCode);
  }, [question.defaultCode]);

  const backHome = () => {
    history.push('/Home');
  };

  const execute = () => {
    for (let index = 0; index < question.testCases.length; index += 1) {
      const args = question.testCases[index].input;
      try {
        const executor = new Function(`return ${code}${args}`);
        const result = executor();
        results.push(result);
        if (`${result}` === question.testCases[index].expected) {
          corrects.push(true);
        }
      } catch {
        setCorrects([]);
        setResults([]);
      }
    }
    const newCode = ConvertAllCode(code) as string;
    const failedAssertions = RunAssertions(question, ConvertAllToNode(newCode)) as any[];
    const failedAssertionsId = failedAssertions.map((assertion) => assertion.id) as string[];

    if (failedAssertions.length) {
      const post: AnswerRequest = {
        questionID: question.questionID,
        isCorrect: false,
        failedAssertions: failedAssertionsId,
      };

      axios
        .post(url, JSON.stringify(post), {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(() => {})
        .catch(() => {});
      setCorrects([]);
      setResults([]);
      setTitle('失敗');
      const message = failedAssertions.map((j) => j.message).join('\n');
      const tagUrlToName = new Map<string, string>();
      const originalUrls = failedAssertions
        .map((j) =>
          j.tags.map((tag: { tutorial_link: string; name: string }) => {
            tagUrlToName.set(tag.tutorial_link, tag.name);
            return tag.tutorial_link;
          })
        )
        .flat() as string[];
      const urls = Array.from(new Set(originalUrls))
        .map((u) => `\n    ${tagUrlToName.get(u)}: ${u}`)
        .join('');
      setDetail(`${message}\n\n再学習が必要そうな項目:${urls}`);
    } else {
      const post: AnswerRequest = {
        questionID: question.questionID,
        isCorrect: true,
        failedAssertions: [],
      };

      axios
        .post(url, JSON.stringify(post), {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(() => {})
        .catch(() => {});
      setCorrects([]);
      setResults([]);
      setTitle('成功');
      setDetail('');
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
        <Button value="戻る" onClick={backHome} />
        <Typography variant="h3">{question.title}</Typography>
        <Typography variant="subtitle1">{question.description}</Typography>
        <Editor theme="solarized_dark" fontsize={14} value={code} onChange={setCode} />
        <Button value="実行" onClick={execute} sx={{ marginBottom: 8 }} />
        <p>{results}</p>
      </Paper>
      <Modal open={open} handleClose={handleClose} title={title} detail={detail} />
    </Container>
  );
};
