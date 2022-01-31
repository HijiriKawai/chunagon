import { VFC } from 'react';

import { Question } from '../../../models/QuestionResponse';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { FailedBox } from '../../molecules/FailedBox';
import { LoadingBox } from '../../molecules/LoadingBox';
import { QuestionsBox } from '../../molecules/QuestionsBox';
import { QuestionsBoxDash } from '../../molecules/QuestionsBoxDash';

type QuestionListProps = {
  status: CommunicationStatus;
  questions: Question[];
};

export const QuestionList: VFC<QuestionListProps> = (props: QuestionListProps) => {
  const { status, questions } = props;
  let isDash = false;
  const storageItem = localStorage.getItem('chunagon_auth');
  let token = '';
  if (storageItem != null) {
    token = JSON.parse(storageItem);
  }
  if (token !== '') {
    const firstLetter = token.charAt(0);
    const result = parseInt(firstLetter, 16);
    if (result % 2 === 0) {
      isDash = true;
    } else {
      isDash = false;
    }
  }
  if (isDash) {
    const questionDetail = {
      OK: QuestionsBoxDash,
      Failed: FailedBox,
      Loading: LoadingBox,
    };

    const Component = questionDetail[status];

    return <Component questions={questions} />;
  }
  const questionDetail = {
    OK: QuestionsBox,
    Failed: FailedBox,
    Loading: LoadingBox,
  };

  const Component = questionDetail[status];

  return <Component questions={questions} />;
};
