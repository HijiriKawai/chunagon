import { VFC } from 'react';

import { Question } from '../../../models/QuestionResponse';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { FailedBox } from '../../molecules/FailedBox';
import { LoadingBox } from '../../molecules/LoadingBox';
import { QuestionsBox } from '../../molecules/QuestionsBox';

type QuestionListProps = {
  status: CommunicationStatus;
  questions: Question[];
};

export const QuestionList: VFC<QuestionListProps> = (props: QuestionListProps) => {
  const { status, questions } = props;
  const questionDetail = {
    OK: QuestionsBox,
    Failed: FailedBox,
    Loading: LoadingBox,
  };

  const Component = questionDetail[status];

  return <Component questions={questions} />;
};
