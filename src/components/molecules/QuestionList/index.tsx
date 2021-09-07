import { useEffect, useState, VFC } from 'react';
import axios from 'axios';
import { useAuthUser } from '../../context/UserAuthContext';
import QuestionsResponse from '../../../models/QuestionResponse';
import { Questions } from '../../atoms/Questions';

export const QuestionList: VFC = () => {
  const [questions, setQuestions] = useState<QuestionsResponse>([]);
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
  const isListed = questions.length !== 0;

  return (
    <>
      {isListed && <Questions questions={questions} />}
      {!isListed && <p>faild</p>}
    </>
  );
};
