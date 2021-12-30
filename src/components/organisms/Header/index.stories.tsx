import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './index';

export default {
  title: 'Example/organisms/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <MemoryRouter initialEntries={['/', 'signup', 'login']}>
    <Header />
  </MemoryRouter>
);

export const Default = Template.bind({});
