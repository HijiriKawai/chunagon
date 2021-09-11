import { VFC } from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  color: #711d26;
`;

export const Faild: VFC = () => {
  return <StyledP>取得に失敗しました</StyledP>;
};
