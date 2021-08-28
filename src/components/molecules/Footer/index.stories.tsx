import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import { Footer } from './index';

export default {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <MemoryRouter initialEntries={['/']}>
    <Footer />
  </MemoryRouter>
);

export const footer = Template.bind({});
