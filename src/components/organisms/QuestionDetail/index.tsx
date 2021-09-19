import { VFC } from 'react';
import QuestionDtailResponse from '../../../models/QuestionDtailResponse';
import { QuestionAnswer } from '../../molecules/QuestionAnswer';
import { Faild } from '../../atoms/Faild';
import { Error } from '../../atoms/Error';
import CommunicationStatus from '../../../utils/CommunicationStatusType';

type QuestionDetailProps = {
  status: CommunicationStatus;
  question: QuestionDtailResponse;
};

export const QuestionDetail: VFC<QuestionDetailProps> = (props: QuestionDetailProps) => {
  const { status, question } = props;

  if (status === 'OK') {
    return <QuestionAnswer question={question} />;
  }
  if (status === 'Faild') {
    return <Faild />;
  }
  if (status === 'Loading') {
    return <Faild />;
  }

  return <Error />;
};
