import React, { useEffect, useState, VFC } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuthUser } from '../../context/UserAuthContext';
import QuestionDtailResponse from '../../../models/QuestionDtailResponse';

type RouterParams = {
  questionID: string;
};

export const QuestionDetail: VFC = () => {
  const [question, setQuestion] = useState<QuestionDtailResponse>({
    questionID: '',
    title: '',
    description: '',
    testCases: [],
    assertions: [],
    answeredCorrectly: false,
  });
  const { questionID } = useParams<RouterParams>();
  const authUser = useAuthUser();
  const token = authUser?.accessToken;
  const url = `http://localhost:8888/question/${questionID}`;
  useEffect(() => {
    axios
      .get<QuestionDtailResponse>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((Response) => {
        setQuestion(Response.data);
      })
      .catch((Error) => {});
  }, [token, url]);

  const isEmpty = question.questionID === '';

  return (
    <>
      {isEmpty && <p>取得に失敗しました。</p>}
      {!isEmpty && <p>{question.title}</p>}
    </>
  );
};
