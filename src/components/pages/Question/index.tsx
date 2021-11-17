import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import { QuestionDetailResponse } from '../../../models/QuestionDetailResponse';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { useAuthUser } from '../../../context/UserAuthContext';
import { QuestionDetail } from '../../organisms/QuestionDetail';
import baseUrl from '../../../utils/ApiUrl';

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
