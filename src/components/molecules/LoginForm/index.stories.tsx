import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from './index';

export default {
  title: 'Example/molecules/LoginForm',
  component: LoginForm,
  argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
