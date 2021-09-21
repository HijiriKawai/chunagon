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
  const questionDetail = {
    OK: Questions,
    Faild,
    Loading: Faild,
  };

  const Component = questionDetail[status];

  return <Component questions={questions} />;
};
