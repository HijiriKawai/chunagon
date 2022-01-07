import { ComponentMeta, ComponentStory } from '@storybook/react';

import { QuestionDetail } from './index';

export default {
  title: 'Example/organisms/QuestionDetail',
  component: QuestionDetail,
  argTypes: {},
} as ComponentMeta<typeof QuestionDetail>;

const Template: ComponentStory<typeof QuestionDetail> = (args) => <QuestionDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'OK',
  question: {
    questionID: '2f644942-e039-4a1c-aab2-bfb8d67d5ff9',
    title: 'add 2 value',
    description:
      '2つの値が与えられると、それらの値を足し合わせた数字を返す関数 `add` を定義してください。',
    testCases: [
      {
        input: 'add(0, 0)',
        expected: '0',
      },
      {
        input: 'add(1, 1)',
        expected: '2',
      },
      {
        input: 'add(1.0, 1.0)',
        expected: '2.0',
      },
      {
        input: 'add(-1, 1)',
        expected: '0',
      },
      {
        input: 'add(-2, 1)',
        expected: '-1',
      },
    ],
    assertions: [
      {
        id: '2f644942-e039-4a1c-aab2-bfb8d67d5ff9',
        assertion: "'+' in code",
        message: '加算が行われていない可能性があります',
        tags: [
          {
            id: '2f644942-e039-4a1c-aab2-bfb8d67d5ff9',
            name: '算術理解',
            tutorialLink:
              'https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators',
          },
        ],
      },
      {
        id: '2f644942-e039-4a1c-aab2-bfb8d67d5ff9',
        assertion: 'add(0, 0) === undefined',
        message: '値が返却されていない可能性があります',
        tags: [
          {
            id: '2f644942-e039-4a1c-aab2-bfb8d67d5ff9',
            name: '関数理解',
            tutorialLink: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions',
          },
        ],
      },
    ],
    answeredCorrectly: false,
    tags: [
      {
        id: '2f644942-e039-4a1c-aab2-bfb8d67d5ff9',
        name: '算術理解',
        tutorialLink:
          'https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators',
      },
      {
        id: '2f644942-e039-4a1c-aab2-bfb8d67d5ff9',
        name: '関数理解',
        tutorialLink: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions',
      },
    ],
    defaultCode: 'function add(first, second) {\n    // your code here\n\n}',
    level: 1,
  },
};

export const Faild = Template.bind({});
Faild.args = {
  status: 'Failed',
  question: {
    questionID: '',
    title: '',
    description: '',
    testCases: [],
    assertions: [],
    answeredCorrectly: false,
    tags: [],
    defaultCode: '',
    level: 1,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  status: 'Loading',
  question: {
    questionID: '',
    title: '',
    description: '',
    testCases: [],
    assertions: [],
    answeredCorrectly: false,
    tags: [],
    defaultCode: '',
    level: 2,
  },
};
