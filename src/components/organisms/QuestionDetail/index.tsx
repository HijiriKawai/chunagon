import { VFC } from 'react';
import QuestionDtailResponse from '../../../models/QuestionDtailResponse';
import { QuestionAnswer } from '../../molecules/QuestionAnswer';
import { Faild } from '../../atoms/Faild';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { Loading } from '../../atoms/Loading';

type QuestionDetailProps = {
  status: CommunicationStatus;
  question: QuestionDtailResponse;
};

export const QuestionDetail: VFC<QuestionDetailProps> = (props: QuestionDetailProps) => {
  const { status, question } = props;
  const questionDetail = {
    OK: QuestionAnswer,
    Faild,
    Loading,
  };

  const Component = questionDetail[status];

  return <Component question={question} />;
};
