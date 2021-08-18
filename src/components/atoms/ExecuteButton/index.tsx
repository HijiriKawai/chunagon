import React, { VFC } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  code: string;
};

const StyledExecuteButton = styled.input`
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

export const ExecuteButton: VFC<ButtonProps> = (props: ButtonProps) => {
  const { code } = props;
  const onClick = () => {
    const args = '1, 2';
    // eslint-disable-next-line no-eval
    const x = eval(code);
    // eslint-disable-next-line no-console
    console.log(x);
  };

  return <StyledExecuteButton type="button" value="実行" onClick={onClick} />;
};
