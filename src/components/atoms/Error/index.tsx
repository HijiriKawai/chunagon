import { VFC } from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  color: #711d26;
`;

export const Error: VFC = () => {
  return <StyledP>エラーが発生しました。</StyledP>;
};
