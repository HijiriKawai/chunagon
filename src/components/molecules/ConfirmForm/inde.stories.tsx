import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ConfirmForm } from './index';

export default {
  title: 'Example/molecules/ConfirmForm',
  component: ConfirmForm,
  argTypes: {},
} as ComponentMeta<typeof ConfirmForm>;

const Template: ComponentStory<typeof ConfirmForm> = (args) => <ConfirmForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
