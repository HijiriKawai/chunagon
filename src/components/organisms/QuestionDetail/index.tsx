import { useState, VFC } from 'react';

import { QuestionDetailResponse } from '../../../models/QuestionDetailResponse';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { FailedBox } from '../../molecules/FailedBox';
import { LoadingBox } from '../../molecules/LoadingBox';
import { QuestionAnswer } from '../../molecules/QuestionAnswer';
import { QuestionAnswerDash } from '../../molecules/QuestionAnswerDash';

const uuidParse = require('uuid').parse;

type QuestionDetailProps = {
  status: CommunicationStatus;
  question: QuestionDetailResponse;
};

export const QuestionDetail: VFC<QuestionDetailProps> = (props: QuestionDetailProps) => {
  const { status, question } = props;
  const [isDash, setIsDash] = useState<boolean>(false);
  const uuid = localStorage.getItem('chunagon_auth');
  if (uuid) {
    const parsedUuid = uuidParse(uuid);
    const buffer = Buffer.from(parsedUuid);
    const result = buffer.readUInt32BE(0);
    if (result % 2 === 0) {
      setIsDash(true);
    } else {
      setIsDash(false);
    }
  }
  let QuestionAns = QuestionAnswer;
  if (isDash) {
    QuestionAns = QuestionAnswerDash;
  }
  const questionDetail = {
    OK: QuestionAns,
    Failed: FailedBox,
    Loading: LoadingBox,
  };

  const Component = questionDetail[status];

  return <Component question={question} />;
};
