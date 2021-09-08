import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormButton } from './index';

export default {
  title: 'Example/atoms/FormButton',
  component: FormButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof FormButton>;

const Template: ComponentStory<typeof FormButton> = (args) => <FormButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'submit',
};
