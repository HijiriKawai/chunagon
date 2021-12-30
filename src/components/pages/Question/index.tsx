import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthUser } from '../../../context/UserAuthContext';
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
  });
  const [status, setStatus] = useState<CommunicationStatus>('Loading');
  const { questionID } = useParams<RouterParams>();
  const authUser = useAuthUser();
  const token = authUser?.accessToken;
  const base = baseUrl();
  const url = `${base}/question/${questionID}`;
  useEffect(() => {
    axios
      .get<QuestionDetailResponse>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((Response) => {
        setQuestion(Response.data);
        setStatus('OK');
      })
      .catch(() => {
        setStatus('Failed');
      });
  }, [token, url]);

  return <QuestionDetail status={status} question={question} />;
};
