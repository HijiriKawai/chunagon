import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputForm } from './index';

export default {
  title: 'Example/InputForm',
  component: InputForm,
  argTypes: {},
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => <InputForm {...args} />;

export const inputForm = Template.bind({});
inputForm.args = {
  type: 'text',
  placeholder: 'InputForm',
};
