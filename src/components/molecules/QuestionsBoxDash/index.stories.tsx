import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { QuestionsBoxDash } from './index';

export default {
  title: 'Example/molecules/QuestionsBox',
  component: QuestionsBoxDash,
  argTypes: {},
} as ComponentMeta<typeof QuestionsBoxDash>;

const Template: ComponentStory<typeof QuestionsBoxDash> = (args) => (
  <MemoryRouter initialEntries={['/question/']}>
    <QuestionsBoxDash {...args} />
  </MemoryRouter>
);
export const Default = Template.bind({});
Default.args = {
  questions: [
    {
      questionID: '1',
      title: 'title1',
      answeredCorrectly: true,
      tags: [],
      level: 1,
    },
    {
      questionID: '2',
      title: 'title2',
      answeredCorrectly: false,
      tags: [],
      level: 2,
    },
  ],
};
