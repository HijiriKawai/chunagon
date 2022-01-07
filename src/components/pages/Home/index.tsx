import axios from 'axios';
import { useEffect, useState, VFC } from 'react';

import QuestionsResponse from '../../../models/QuestionResponse';
import baseUrl from '../../../utils/ApiUrl';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { QuestionList } from '../../organisms/QuestionList';

export const Home: VFC = () => {
  const [questions, setQuestions] = useState<QuestionsResponse>([]);
  const [status, setStatus] = useState<CommunicationStatus>('Loading');
  const base = baseUrl();
  const url = `${base}/question`;
  useEffect(() => {
    axios
      .get<QuestionsResponse>(url)
      .then((Response) => {
        setQuestions(Response.data);
        setStatus('OK');
      })
      .catch(() => {
        setStatus('Failed');
      });
  }, [url]);

  return <QuestionList status={status} questions={questions} />;
};
