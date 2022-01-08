type AnswerRequest = {
  questionID: string;
  isCorrect: boolean;
  isAssertionUsed: boolean;
  failedAssertions: string[];
};

export default AnswerRequest;
