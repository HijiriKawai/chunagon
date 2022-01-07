export type Tag = {
  id: string;
  name: string;
  tutorialLink: string;
};

type TestCase = {
  input: string;
  expected: string;
};

export type Assertion = {
  id: string;
  message: string;
  assertion: string;
  tags: Tag[];
};

export type QuestionDetailResponse = {
  questionID: string;
  title: string;
  description: string;
  defaultCode: string;
  tags: Tag[];
  testCases: TestCase[];
  assertions: Assertion[];
  answeredCorrectly: boolean;
  level: number;
};
