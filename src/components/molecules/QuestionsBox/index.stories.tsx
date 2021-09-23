import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QuestionsBox } from './index';

export default {
  title: 'Example/molecules/QuestionsBox',
  component: QuestionsBox,
  argTypes: {},
} as ComponentMeta<typeof QuestionsBox>;

const Template: ComponentStory<typeof QuestionsBox> = (args) => <QuestionsBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
