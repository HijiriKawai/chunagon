type Tag = {
  id: string;
  name: string;
  tutorialLink: string;
};

type TestCase = {
  input: string;
  expected: string;
};

type Assertion = {
  id: string;
  assertion: string;
  message: string;
  tags: Tag[];
};

type QuestionDetailResponse = {
  questionID: string;
  title: string;
  description: string;
  testCases: TestCase[];
  assertions: Assertion[];
  answeredCorrectly: boolean;
  tags: Tag[];
  defaultCode: string;
};

export default QuestionDetailResponse;
