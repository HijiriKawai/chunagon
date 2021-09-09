import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import QuestionsResponse from '../../../models/QuestionResponse';
import { useAuthUser } from '../../context/UserAuthContext';
import { QuestionList } from '../../organisms/QuestionList';

export const Home: VFC = () => {
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
      <h1>home</h1>
      <QuestionList isListed={isListed} questions={questions} />
    </>
  );
};
