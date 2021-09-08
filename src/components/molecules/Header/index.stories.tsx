import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './index';

export default {
  title: 'Example/molecules/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <MemoryRouter initialEntries={['/', 'signup', 'login']}>
    <Header />
  </MemoryRouter>
);

export const Default = Template.bind({});
