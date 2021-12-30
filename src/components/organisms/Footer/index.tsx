import styled from '@emotion/styled';
import { VFC } from 'react';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #efefef;
  color: #a0a0a0;
  text-align: center;
`;

const FooterMenuItem = styled.li`
  display: inline;
`;

export const Footer: VFC = () => {
  return (
    <StyledFooter>
      <ul>
        <FooterMenuItem>
          <Link to="/">Home</Link>
        </FooterMenuItem>
      </ul>
      <p>© 2021 HijiriKawai</p>
    </StyledFooter>
  );
};
