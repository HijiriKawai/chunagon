import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormButton } from './index';

export default {
  title: 'Example/FormButton',
  component: FormButton,
  argTypes: {},
} as ComponentMeta<typeof FormButton>;

const Template: ComponentStory<typeof FormButton> = (args) => <FormButton {...args} />;

export const formButton = Template.bind({});
formButton.args = {
  value: 'submit',
};
