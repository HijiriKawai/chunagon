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
import { checkAssertion } from '../../../utils/Assertion';

type QuestionAnswerProps = {
  question: QuestionDetailResponse;
};

export const QuestionAnswer: VFC<QuestionAnswerProps> = (props: QuestionAnswerProps) => {
  const { question } = props;
  const history = useHistory();
  const [code, setCode] = useState<string>('');
  const [corrects, setCorrects] = useState<boolean[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const authUser = useAuthUser();
  const token = authUser?.accessToken;
  const base = baseUrl();
  const url = `${base}/answer`;

  useEffect(() => {
    setCode(question.defaultCode);
  }, [question.defaultCode]);

  const onClick = () => {
    for (let index = 0; index < question.testCases.length; index += 1) {
      const args = question.testCases[index].input;
      const executor = new Function(`return ${code}${args}`);
      const resurt = executor();
      results.push(resurt);
      if (`${resurt}` === question.testCases[index].expected) {
        corrects.push(true);
      }
    }

    if (corrects.length === question.testCases.length) {
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
        .then(() => {
          history.push('/Home');
        })
        .catch(() => {});
    } else {
      const failedAssertions = checkAssertion(results, code, question.assertions);
      const post: AnswerRequest = {
        questionID: question.questionID,
        isCorrect: false,
        failedAssertions,
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
    }
    setCorrects([]);
    setResults([]);
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
        <Button value="実行" onClick={onClick} sx={{ marginBottom: 8 }} />
        <p>{results}</p>
      </Paper>
    </Container>
  );
};
