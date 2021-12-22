import { VFC } from 'react';
import { QuestionDetailResponse } from '../../../models/QuestionDetailResponse';
import { QuestionAnswer } from '../../molecules/QuestionAnswer';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { FailedBox } from '../../molecules/FailedBox';
import { LoadingBox } from '../../molecules/LoadingBox';

type QuestionDetailProps = {
  status: CommunicationStatus;
  question: QuestionDetailResponse;
};

export const QuestionDetail: VFC<QuestionDetailProps> = (props: QuestionDetailProps) => {
  const { status, question } = props;
  const questionDetail = {
    OK: QuestionAnswer,
    Failed: FailedBox,
    Loading: LoadingBox,
  };

  const Component = questionDetail[status];

  return <Component question={question} />;
};
