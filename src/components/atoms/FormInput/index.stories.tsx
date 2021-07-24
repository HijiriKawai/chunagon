import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormInput } from './index';

export default {
  title: 'Example/FormInput',
  component: FormInput,
  argTypes: {},
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const formInput = Template.bind({});
formInput.args = {
  type: 'text',
  placeholder: 'FormInput',
};
