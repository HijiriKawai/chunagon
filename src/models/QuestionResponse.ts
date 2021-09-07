type Question = {
  questionID: string;
  title: string;
  answeredCorrectly: boolean;
};

type QuestionsResponse = Question[];

export default QuestionsResponse;
