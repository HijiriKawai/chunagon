import AssertionType from './AssertionType';

type Tag = {
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
  assertion: AssertionType;
  message: string;
  tags: Tag[];
};

export type QuestionDetailResponse = {
  questionID: string;
  title: string;
  description: string;
  testCases: TestCase[];
  assertions: Assertion[];
  answeredCorrectly: boolean;
  tags: Tag[];
  defaultCode: string;
};
