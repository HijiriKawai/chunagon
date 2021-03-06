import { VFC } from 'react';

import { QuestionDetailResponse } from '../../../models/QuestionDetailResponse';
import CommunicationStatus from '../../../utils/CommunicationStatusType';
import { FailedBox } from '../../molecules/FailedBox';
import { LoadingBox } from '../../molecules/LoadingBox';
import { QuestionAnswer } from '../../molecules/QuestionAnswer';
import { QuestionAnswerDash } from '../../molecules/QuestionAnswerDash';

type QuestionDetailProps = {
  status: CommunicationStatus;
  question: QuestionDetailResponse;
};

export const QuestionDetail: VFC<QuestionDetailProps> = (props: QuestionDetailProps) => {
  const { status, question } = props;
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
      OK: QuestionAnswerDash,
      Failed: FailedBox,
      Loading: LoadingBox,
    };

    const Component = questionDetail[status];

    return <Component question={question} />;
  }
  const questionDetail = {
    OK: QuestionAnswer,
    Failed: FailedBox,
    Loading: LoadingBox,
  };

  const Component = questionDetail[status];

  return <Component question={question} />;
};
