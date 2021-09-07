type TestCase = {
  input: string;
  expected: string;
};

type Assertion = {
  assertion: string;
  message: string;
};

type QuestionDtailResponse = {
  questionID: string;
  title: string;
  description: string;
  testCases: TestCase[];
  assertions: Assertion[];
  answeredCorrectly: boolean;
};

export default QuestionDtailResponse;
