import { VFC } from 'react';
import QuestionDtailResponse from '../../../models/QuestionDtailResponse';
import { QuestionAnswer } from '../../molecules/QuestionAnswer';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { FaildBox } from '../../molecules/FaildBox';
import { LoadingBox } from '../../molecules/LoadingBox';

type QuestionDetailProps = {
  status: CommunicationStatus;
  question: QuestionDtailResponse;
};

export const QuestionDetail: VFC<QuestionDetailProps> = (props: QuestionDetailProps) => {
  const { status, question } = props;
  const questionDetail = {
    OK: QuestionAnswer,
    Faild: FaildBox,
    Loading: LoadingBox,
  };

  const Component = questionDetail[status];

  return <Component question={question} />;
};
