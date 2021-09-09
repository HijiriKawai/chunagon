import { VFC } from 'react';
import QuestionsResponse from '../../../models/QuestionResponse';
import { Questions } from '../../atoms/Questions';
import { Faild } from '../../atoms/Faild';

type QuestionListProps = {
  isListed: boolean;
  questions: QuestionsResponse;
};

export const QuestionList: VFC<QuestionListProps> = (props: QuestionListProps) => {
  const { isListed, questions } = props;

  return (
    <>
      {isListed && <Questions questions={questions} />}
      {!isListed && <Faild />}
    </>
  );
};
