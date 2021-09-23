import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import AnswerRequest from '../../../models/AnswerRequest';
import QuestionDtailResponse from '../../../models/QuestionDtailResponse';
import { Editor } from '../../atoms/Editor';
import { Button } from '../../atoms/Button';
import { useAuthUser } from '../../context/UserAuthContext';

type QuestionAnswerProps = {
  question: QuestionDtailResponse;
};

export const QuestionAnswer: VFC<QuestionAnswerProps> = (props: QuestionAnswerProps) => {
  const { question } = props;
  const [code, setCode] = useState<string>('');
  const [corrects, setCorrects] = useState<boolean[]>([]);
  const [result, setResult] = useState<string>('');
  const authUser = useAuthUser();
  const token = authUser?.accessToken;
  const url = `http://localhost:8888/answer`;

  useEffect(() => {
    setCode(`console.log("Hello World!");`);
    for (let index = 0; index < question.testCases.length; index += 1) {
      corrects.push(false);
    }
  }, [corrects, question.testCases.length]);

  const onClick = () => {
    for (let index = 0; index < question.testCases.length; index += 1) {
      const args = question.testCases[index].input;
      // eslint-disable-next-line no-eval
      setResult(eval(code));
      if (result === question.testCases[index].expected) {
        corrects[index] = true;
      }
    }

    if (corrects.every((correct) => correct === true)) {
      const post: AnswerRequest = {
        questionID: question.questionID,
        isCorrect: true,
      };

      axios
        .post(url, JSON.stringify(post), {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((Response) => {})
        .catch((Error) => {});
    }
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
        <p>{result}</p>
      </Paper>
    </Container>
  );
};
