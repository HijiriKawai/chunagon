import React, { useEffect, useState, VFC } from 'react';
import axios from 'axios';
import { useAuthUser } from '../../context/UserAuthContext';
import QuestionsResponse from '../../../models/QuestionResponse';
import { Questions } from '../Questions';

export const QuestionList: VFC = () => {
  const x: QuestionsResponse = [];
  const [questions, setQuestions] = useState<QuestionsResponse>(x);
  const authUser = useAuthUser();
  const token = authUser?.accessToken;
  const url = 'http://localhost:8888/question';
  useEffect(() => {
    axios
      .get<QuestionsResponse>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((Response) => {
        setQuestions(Response.data);
      })
      .catch((Error) => {});
  }, [token]);
  const isListed = questions != null;

  return (
    <>
      {isListed && <Questions questions={questions} />}
      {!isListed && <p>faild</p>}
    </>
  );
};
