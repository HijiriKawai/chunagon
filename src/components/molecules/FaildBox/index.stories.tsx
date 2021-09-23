import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FaildBox } from './index';

export default {
  title: 'Example/molecules/FaildBox',
  component: FaildBox,
  argTypes: {},
} as ComponentMeta<typeof FaildBox>;

const Template: ComponentStory<typeof FaildBox> = (args) => <FaildBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
