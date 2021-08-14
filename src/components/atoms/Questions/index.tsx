import React, { useEffect, useState, VFC } from 'react';
import QuestionsResponse from '../../../models/QuestionResponse';

type QuestionsProps = {
  questions: QuestionsResponse;
};

export const Questions: VFC<QuestionsProps> = (props: QuestionsProps) => {
  const { questions } = props;
  const items = questions.map((question) => {
    return (
      <div key={question.questionID}>
        <p>
          {question.questionID},{question.title}
        </p>
      </div>
    );
  });
  return <>{items}</>;
};
