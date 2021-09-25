import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import QuestionsResponse from '../../../models/QuestionResponse';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { useAuthUser } from '../../../context/UserAuthContext';
import { QuestionList } from '../../organisms/QuestionList';
import baseUrl from '../../../utils/ApiUrl';

export const Home: VFC = () => {
  const [questions, setQuestions] = useState<QuestionsResponse>([]);
  const [status, setStatus] = useState<CommunicationStatus>('Loading');
  const authUser = useAuthUser();
  const token = authUser?.accessToken;
  const base = baseUrl();
  const url = `${base}/question`;
  useEffect(() => {
    axios
      .get<QuestionsResponse>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((Response) => {
        setQuestions(Response.data);
        setStatus('OK');
      })
      .catch(() => {
        setStatus('Faild');
      });
  }, [token, url]);

  return <QuestionList status={status} questions={questions} />;
};
