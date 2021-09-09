import axios from 'axios';
import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import QuestionDtailResponse from '../../../models/QuestionDtailResponse';
import { useAuthUser } from '../../context/UserAuthContext';
import { QuestionDetail } from '../../organisms/QuestionDetail';

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
  const { questionID } = useParams<RouterParams>();
  const authUser = useAuthUser();
  const token = authUser?.accessToken;
  const url = `http://localhost:8888/question/${questionID}`;
  useEffect(() => {
    axios
      .get<QuestionDtailResponse>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((Response) => {
        setQuestion(Response.data);
      })
      .catch((Error) => {});
  }, [token, url]);

  const isEmpty = question.questionID === '';

  return (
    <>
      <QuestionDetail isEmpty={isEmpty} question={question} />
    </>
  );
};
