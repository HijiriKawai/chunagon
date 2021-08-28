import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import { Header } from './index';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <MemoryRouter initialEntries={['/', 'signup', 'login']}>
    <Header />
  </MemoryRouter>
);

export const header = Template.bind({});
