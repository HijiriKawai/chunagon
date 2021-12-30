import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loading } from './index';

export default {
  title: 'Example/atoms/Loading',
  component: Loading,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {};
