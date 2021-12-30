import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Editor } from './index';

export default {
  title: 'Example/atoms/Editor',
  component: Editor,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'solarized_light',
  fontsize: 14,
};
