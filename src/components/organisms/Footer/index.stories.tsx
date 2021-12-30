import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Footer } from './index';

export default {
  title: 'Example/organisms/ Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <MemoryRouter initialEntries={['/']}>
    <Footer />
  </MemoryRouter>
);

export const Default = Template.bind({});
