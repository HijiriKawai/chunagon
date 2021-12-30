import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormInput } from './index';

export default {
  title: 'Example/atoms/FormInput',
  component: FormInput,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'FormInput',
  label: 'default',
  value: 'default',
};
