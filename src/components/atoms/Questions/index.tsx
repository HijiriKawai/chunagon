import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import QuestionsResponse from '../../../models/QuestionResponse';

type QuestionsProps = {
  questions: QuestionsResponse;
};

export const Questions: VFC<QuestionsProps> = (props: QuestionsProps) => {
  const { questions } = props;
  const items = questions.map((question) => {
    return (
      <div key={question.questionID}>
        <Link to={`question/${question.questionID}`}>{question.title}</Link>
        {question.answeredCorrectly && <p>済</p>}
        {!question.answeredCorrectly && <p>未</p>}
      </div>
    );
  });
  return <>{items}</>;
};
