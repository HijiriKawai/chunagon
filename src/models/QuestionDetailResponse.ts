type TestCase = {
  input: string;
  expected: string;
};

type Assertion = {
  assertion: string;
  message: string;
};

type QuestionDetailResponse = {
  questionID: string;
  title: string;
  description: string;
  testCases: TestCase[];
  assertions: Assertion[];
  answeredCorrectly: boolean;
};

export default QuestionDetailResponse;
