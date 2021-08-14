import React, { VFC } from 'react';
import { QuestionList } from '../../atoms/QuestionList';

export const Home: VFC = () => {
  return (
    <>
      <h1>home</h1>
      <QuestionList />
    </>
  );
};
