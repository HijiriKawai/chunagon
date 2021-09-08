import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LogoutButton } from './index';

export default {
  title: 'Example/atoms/LogoutButton',
  component: LogoutButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof LogoutButton>;

const Template: ComponentStory<typeof LogoutButton> = (args) => <LogoutButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'submit',
};
