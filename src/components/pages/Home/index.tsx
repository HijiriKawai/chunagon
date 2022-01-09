import axios from 'axios';
import { useEffect, useState, VFC } from 'react';

import QuestionsResponse, { Question } from '../../../models/QuestionResponse';
import baseUrl from '../../../utils/ApiUrl';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { QuestionList } from '../../organisms/QuestionList';

export const Home: VFC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [status, setStatus] = useState<CommunicationStatus>('Loading');
  const base = baseUrl();
  const url = `${base}/question`;
  useEffect(() => {
    axios
      .get<QuestionsResponse>(url, { withCredentials: true })
      .then((Response) => {
        setQuestions(Response.data.questions);
        localStorage.setItem('chunagon_auth', JSON.stringify(Response.data.token));
        setStatus('OK');
      })
      .catch(() => {
        setStatus('Failed');
      });
  }, [url]);

  return <QuestionList status={status} questions={questions} />;
};
