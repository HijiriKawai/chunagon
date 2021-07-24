import React, { FC } from 'react';
import styled from 'styled-components';

type FormInputProps = {
  type: 'text' | 'password';
  placeholder: string;
};

const Wrapper = styled.div`
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const UnderLine = styled.div`
  position: relative;
  border-top: 1px solid #c2c2c2;
`;

export const FormInput: FC<FormInputProps> = ({ type, placeholder }) => {
  return (
    <Wrapper>
      <StyledInput type={type} placeholder={placeholder} />
      <UnderLine />
    </Wrapper>
  );
};
