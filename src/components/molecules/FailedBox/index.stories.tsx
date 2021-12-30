import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FailedBox } from './index';

export default {
  title: 'Example/molecules/FailedBox',
  component: FailedBox,
  argTypes: {},
} as ComponentMeta<typeof FailedBox>;

const Template: ComponentStory<typeof FailedBox> = (args) => <FailedBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
