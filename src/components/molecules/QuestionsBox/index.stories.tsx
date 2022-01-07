import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { QuestionsBox } from './index';

export default {
  title: 'Example/molecules/QuestionsBox',
  component: QuestionsBox,
  argTypes: {},
} as ComponentMeta<typeof QuestionsBox>;

const Template: ComponentStory<typeof QuestionsBox> = (args) => (
  <MemoryRouter initialEntries={['/question/']}>
    <QuestionsBox {...args} />
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
