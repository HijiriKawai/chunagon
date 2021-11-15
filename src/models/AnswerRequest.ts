type AnswerRequest = {
  questionID: string;
  isCorrect: boolean;
  failedAssertions: string[];
};

export default AnswerRequest;
