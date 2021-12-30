import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoadingBox } from './index';

export default {
  title: 'Example/molecules/LoadingBox',
  component: LoadingBox,
  argTypes: {},
} as ComponentMeta<typeof LoadingBox>;

const Template: ComponentStory<typeof LoadingBox> = (args) => <LoadingBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
