import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QuestionList } from './index';

export default {
  title: 'Example/molecules/QuestionList',
  component: QuestionList,
  argTypes: {},
} as ComponentMeta<typeof QuestionList>;

const Template: ComponentStory<typeof QuestionList> = (args) => <QuestionList {...args} />;

export const Default = Template.bind({});
Default.args = {};
