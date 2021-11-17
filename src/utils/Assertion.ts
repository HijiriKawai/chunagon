import { Assertion } from '../models/QuestionDetailResponse';

export const checkAssertion = (results: any[], code: string, assertions: Assertion[]) => {
  const failedAssertions: string[] = [];
  for (let index = 0; index < assertions.length; index += 1) {
    switch (assertions[index].assertion) {
      case "'+' in code":
        if (code.search(/\+/) === -1) {
          failedAssertions.push(assertions[index].id);
        }
        break;

      case 'add(0, 0) === undefined':
        if (results.includes(undefined)) {
          failedAssertions.push(assertions[index].id);
        }
        break;
      default:
        break;
    }
  }

  return failedAssertions;
};
