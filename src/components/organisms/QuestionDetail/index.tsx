import { VFC } from 'react';
import QuestionDtailResponse from '../../../models/QuestionDtailResponse';
import { QuestionAnswer } from '../../molecules/QuestionAnswer';
import { Faild } from '../../atoms/Faild';

type QuestionDetailProps = {
  isEmpty: boolean;
  question: QuestionDtailResponse;
};

export const QuestionDetail: VFC<QuestionDetailProps> = (props: QuestionDetailProps) => {
  const { isEmpty, question } = props;

  return (
    <>
      {isEmpty && <Faild />}
      {!isEmpty && <QuestionAnswer question={question} />}
    </>
  );
};
