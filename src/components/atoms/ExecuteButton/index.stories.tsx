import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExecuteButton } from './index';

export default {
  title: 'Example/atoms/ExecuteButton',
  component: ExecuteButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ExecuteButton>;

const Template: ComponentStory<typeof ExecuteButton> = (args) => <ExecuteButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
