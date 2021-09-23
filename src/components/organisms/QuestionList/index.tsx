import { VFC } from 'react';
import QuestionsResponse from '../../../models/QuestionResponse';
import { Questions } from '../../atoms/Questions';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { FaildBox } from '../../molecules/FaildBox';
import { LoadingBox } from '../../molecules/LoadingBox';

type QuestionListProps = {
  status: CommunicationStatus;
  questions: QuestionsResponse;
};

export const QuestionList: VFC<QuestionListProps> = (props: QuestionListProps) => {
  const { status, questions } = props;
  const questionDetail = {
    OK: Questions,
    Faild: FaildBox,
    Loading: LoadingBox,
  };

  const Component = questionDetail[status];

  return <Component questions={questions} />;
};
