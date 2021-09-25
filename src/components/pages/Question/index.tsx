import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import QuestionDtailResponse from '../../../models/QuestionDtailResponse';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { useAuthUser } from '../../../context/UserAuthContext';
import { QuestionDetail } from '../../organisms/QuestionDetail';
import baseUrl from '../../../utils/ApiUrl';

type RouterParams = {
  questionID: string;
};

export const Question: VFC = () => {
  const [question, setQuestion] = useState<QuestionDtailResponse>({
    questionID: '',
    title: '',
    description: '',
    testCases: [],
    assertions: [],
    answeredCorrectly: false,
  });
  const [status, setStatus] = useState<CommunicationStatus>('Loading');
  const { questionID } = useParams<RouterParams>();
  const authUser = useAuthUser();
  const token = authUser?.accessToken;
  const base = baseUrl();
  const url = `${base}/question/${questionID}`;
  useEffect(() => {
    axios
      .get<QuestionDtailResponse>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((Response) => {
        setQuestion(Response.data);
        setStatus('OK');
      })
      .catch(() => {
        setStatus('Faild');
      });
  }, [token, url]);

  return <QuestionDetail status={status} question={question} />;
};
