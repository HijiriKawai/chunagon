import { VFC } from 'react';
import styled from 'styled-components';

type FormInputProps = {
  type: 'text' | 'password';
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
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
  cursor: text;
`;

const UnderLine = styled.div`
  position: relative;
  border-top: 1px solid #c2c2c2;
`;

export const FormInput: VFC<FormInputProps> = (props: FormInputProps) => {
  const { type, placeholder, onChange, value } = props;
  return (
    <Wrapper>
      <StyledInput type={type} placeholder={placeholder} onChange={onChange} value={value} />
      <UnderLine />
    </Wrapper>
  );
};
