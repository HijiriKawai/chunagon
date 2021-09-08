import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './index';

export default {
  title: 'Example/molecules/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <MemoryRouter initialEntries={['/']}>
    <Footer />
  </MemoryRouter>
);

export const Default = Template.bind({});
