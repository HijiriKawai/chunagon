import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Error } from './index';

export default {
  title: 'Example/atoms/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Default = Template.bind({});
Default.args = {};
