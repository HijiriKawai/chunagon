import { VFC } from 'react';
import QuestionsResponse from '../../../models/QuestionResponse';
import { Questions } from '../../atoms/Questions';
import { Faild } from '../../atoms/Faild';
import { Error } from '../../atoms/Error';
import CommunicationStatus from '../../../utils/CommunicationStatusType';

type QuestionListProps = {
  status: CommunicationStatus;
  questions: QuestionsResponse;
};

export const QuestionList: VFC<QuestionListProps> = (props: QuestionListProps) => {
  const { status, questions } = props;

  if (status === 'OK') {
    return <Questions questions={questions} />;
  }
  if (status === 'Faild') {
    return <Faild />;
  }
  if (status === 'Loading') {
    return <Faild />;
  }

  return <Error />;
};
