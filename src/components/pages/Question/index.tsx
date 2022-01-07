import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';

import { QuestionDetailResponse } from '../../../models/QuestionDetailResponse';
import baseUrl from '../../../utils/ApiUrl';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { QuestionDetail } from '../../organisms/QuestionDetail';

type RouterParams = {
  questionID: string;
};

export const Question: VFC = () => {
  const [question, setQuestion] = useState<QuestionDetailResponse>({
    questionID: '',
    title: '',
    description: '',
    testCases: [],
    assertions: [],
    answeredCorrectly: false,
    tags: [],
    defaultCode: '',
    level: 0,
  });
  const [status, setStatus] = useState<CommunicationStatus>('Loading');
  const { questionID } = useParams<RouterParams>();
  const base = baseUrl();
  const url = `${base}/question/${questionID}`;
  useEffect(() => {
    axios
      .get<QuestionDetailResponse>(url)
      .then((Response) => {
        setQuestion(Response.data);
        setStatus('OK');
      })
      .catch(() => {
        setStatus('Failed');
      });
  }, [url]);

  return <QuestionDetail status={status} question={question} />;
};
