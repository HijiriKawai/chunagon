import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Faild } from './index';

export default {
  title: 'Example/atoms/Faild',
  component: Faild,
} as ComponentMeta<typeof Faild>;

const Template: ComponentStory<typeof Faild> = (args) => <Faild {...args} />;

export const Default = Template.bind({});
Default.args = {};
