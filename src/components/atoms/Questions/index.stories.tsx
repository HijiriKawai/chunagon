import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Questions } from './index';

export default {
  title: 'Example/atoms/Questions',
  component: Questions,
  argTypes: {},
} as ComponentMeta<typeof Questions>;

const Template: ComponentStory<typeof Questions> = (args) => (
  <MemoryRouter initialEntries={['/question/']}>
    <Questions {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  questions: [
    {
      questionID: '1',
      title: 'title1',
      answeredCorrectly: true,
    },
    {
      questionID: '2',
      title: 'title2',
      answeredCorrectly: false,
    },
  ],
};
