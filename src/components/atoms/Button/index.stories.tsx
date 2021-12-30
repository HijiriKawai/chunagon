import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Example/atoms/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'button',
};
