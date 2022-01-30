import { useState, VFC } from 'react';

import { Question } from '../../../models/QuestionResponse';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { FailedBox } from '../../molecules/FailedBox';
import { LoadingBox } from '../../molecules/LoadingBox';
import { QuestionsBox } from '../../molecules/QuestionsBox';
import { QuestionsBoxDash } from '../../molecules/QuestionsBoxDash';

const uuidParse = require('uuid').parse;

type QuestionListProps = {
  status: CommunicationStatus;
  questions: Question[];
};

export const QuestionList: VFC<QuestionListProps> = (props: QuestionListProps) => {
  const { status, questions } = props;
  const [isDash, setIsDash] = useState<boolean>(false);
  const uuid = localStorage.getItem('chunagon_auth');
  if (uuid) {
    try {
      const parsedUuid = uuidParse(uuid);
      const buffer = Buffer.from(parsedUuid);
      const result = buffer.readUInt32BE(0);
      if (result % 2 === 0) {
        setIsDash(true);
      } else {
        setIsDash(false);
      }
    } catch {
      setIsDash(true);
    }
  }
  let QuestionsB = QuestionsBox;
  if (isDash) {
    QuestionsB = QuestionsBoxDash;
  }
  const questionDetail = {
    OK: QuestionsB,
    Failed: FailedBox,
    Loading: LoadingBox,
  };

  const Component = questionDetail[status];

  return <Component questions={questions} />;
};
