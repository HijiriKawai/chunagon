import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter, Route } from 'react-router-dom';

import { QuestionDetail } from './index';

export default {
  title: 'Example/molecules/QuestionDetail',
  component: QuestionDetail,
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/path/58270ae9-c0ce-42e9-b0f6-f1e6fd924cf7']}>
        <Route path="/path/:questionId">
          <Story />
        </Route>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof QuestionDetail>;

const Template: ComponentStory<typeof QuestionDetail> = (args) => <QuestionDetail {...args} />;

export const Default = Template.bind({});
Default.args = {};
