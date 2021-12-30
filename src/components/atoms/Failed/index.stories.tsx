import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Failed } from './index';

export default {
  title: 'Example/atoms/Failed',
  component: Failed,
} as ComponentMeta<typeof Failed>;

const Template: ComponentStory<typeof Failed> = (args) => <Failed {...args} />;

export const Default = Template.bind({});
Default.args = {};
