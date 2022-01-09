import { Tag } from './QuestionDetailResponse';

export type Question = {
  questionID: string;
  title: string;
  answeredCorrectly: boolean;
  tags: Tag[];
  level: number;
};

type QuestionsResponse = {
  token: string;
  questions: Question[];
};

export default QuestionsResponse;
