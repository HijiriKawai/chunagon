import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SignupForm } from './index';

export default {
  title: 'Example/molecules/SignupForm',
  component: SignupForm,
  argTypes: {},
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = (args) => <SignupForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
