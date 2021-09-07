import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Editor } from './index';

export default {
  title: 'Example/Editor',
  component: Editor,
  argTypes: {},
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;

export const editor = Template.bind({});
editor.args = {
  theme: 'solarized_light',
  fontsize: 14,
};
