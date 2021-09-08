import { VFC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthUser } from '../../context/UserAuthContext';
import { LogoutButton } from '../../atoms/LogoutButton';

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
              <LogoutButton />
            </NavListItem>
          </NavLoginList>
        )}
      </StyledHeader>
      <UnderLine />
    </>
  );
};
