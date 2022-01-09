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
  const storageItem = localStorage.getItem('chunagon_auth');
  let token = '';
  if (storageItem != null) {
    token = JSON.parse(storageItem);
  }
  const url = `${base}/question/${questionID}?token=${token}`;
  useEffect(() => {
    axios
      .get<QuestionDetailResponse>(url, { withCredentials: true })
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
