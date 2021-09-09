import { VFC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthUser, useLogout } from '../../context/UserAuthContext';
import { Button } from '../../atoms/Button';
import LogoutRequest from '../../../models/LogoutRequest';

const StyledHeader = styled.header`
  height: 100px;
  width: 100%;
  padding: 15px 0;
  background-color: white;
  color: black;
`;

const Headline = styled.h1`
  line-height: 100px;
  float: left;
  font-size: 30px;
  margin-left: 100px;
`;

const NavList = styled.ul`
  line-height: 100px;
  float: left;
  margin-left: 30px;
  list-style: none;
`;

const NavLoginList = styled.ul`
  line-height: 100px;
  float: right;
  margin-left: 30px;
  list-style: none;
  color: black;
`;

const NavListItem = styled.li`
  list-style: none;
  display: inline-block;
  margin: 0 20px;
`;

const UnderLine = styled.div`
  position: relative;
  border-top: 1px solid black;
`;

const StyledLink = styled(Link)``;

export const Header: VFC = () => {
  const authUser = useAuthUser();
  const isAuthenticated = authUser != null;
  const logout = useLogout();

  const handleLogout = () => {
    if (authUser) {
      const req: LogoutRequest = {
        grant_type: 'refresh_token',
        refresh_token: authUser.refreshToken,
      };
      logout(req);
    }
  };

  return (
    <>
      <StyledHeader>
        <Headline>Chunagon</Headline>
        <NavList>
          <NavListItem>
            <Link to="/home">Home</Link>
          </NavListItem>
        </NavList>
        {!isAuthenticated && (
          <NavLoginList>
            <NavListItem>
              <StyledLink to="/signup">新規登録</StyledLink>
            </NavListItem>
            <NavListItem>
              <StyledLink to="/login">ログイン</StyledLink>
            </NavListItem>
          </NavLoginList>
        )}
        {isAuthenticated && (
          <NavLoginList>
            <NavListItem>
              <Button value="ログアウト" onClick={handleLogout} />
            </NavListItem>
          </NavLoginList>
        )}
      </StyledHeader>
      <UnderLine />
    </>
  );
};
