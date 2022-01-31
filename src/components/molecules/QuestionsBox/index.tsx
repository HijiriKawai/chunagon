import { Container, Link, Paper } from '@mui/material';
import { VFC } from 'react';

import { Question } from '../../../models/QuestionResponse';
import { Questions } from '../../atoms/Questions';

type QuestionsBoxProps = {
  questions: Question[];
};

export const QuestionsBox: VFC<QuestionsBoxProps> = (props: QuestionsBoxProps) => {
  const { questions } = props;
  return (
    <Container component="main">
      <Paper
        sx={{
          marginTop: 8,
          marginBottom: 8,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 8,
          paddingRight: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Questions questions={questions} />
        <Link
          variant="h3"
          underline="none"
          href="https://forms.gle/Xpa2QDUeQW3yazrJ8"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ paddingTop: 8, paddingBottom: 8, paddingLeft: 8, paddingRight: 8 }}
        >
          アンケートはこちらから
        </Link>
      </Paper>
    </Container>
  );
};
