import { Tag } from './QuestionDetailResponse';

type Question = {
  questionID: string;
  title: string;
  answeredCorrectly: boolean;
  tags: Tag[];
  level: number;
};

type QuestionsResponse = Question[];

export default QuestionsResponse;
