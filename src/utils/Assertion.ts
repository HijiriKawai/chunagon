import { Assertion } from '../models/QuestionDetailResponse';

export const checkAssertion = (results: any[], code: string, assertions: Assertion[]) => {
  const failedAssertions: string[] = [];
  assertions.forEach((assertion) => {
    switch (assertion.assertion) {
      case "'+' in code":
        if (code.search(/\+/) === -1) {
          failedAssertions.push(assertion.id);
        }
        break;

      case 'add(0, 0) === undefined':
        if (results.includes(undefined)) {
          failedAssertions.push(assertion.id);
        }
        break;
      default:
        break;
    }
  });

  return failedAssertions;
};
