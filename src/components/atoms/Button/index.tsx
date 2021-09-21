import { VFC } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  value: string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const StyledButton = styled.input`
  font-size: 0.875rem;
  color: white;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  margin: 4px;
  border-radius: 25px;
  background-color: #67daff;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Button: VFC<ButtonProps> = (props: ButtonProps) => {
  const { value, onClick } = props;
  return <StyledButton type="button" value={value} onClick={onClick} />;
};