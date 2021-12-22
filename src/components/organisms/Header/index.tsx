import { VFC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { useAuthUser, useLogout } from '../../../context/UserAuthContext';
import { Button } from '../../atoms/Button';
import LogoutRequest from '../../../models/LogoutRequest';

const StyledHeader = styled.header`
  background-color: white;
`;

const UnderLine = styled.div`
  position: relative;
  border-top: 1px solid black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  :active {
    color: #26a69a;
  }
  :hover {
    color: #26a69a;
  }
`;

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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Typography variant="h3">chunagon</Typography>
            <StyledLink to="/home">home</StyledLink>
          </Stack>
          {!isAuthenticated && (
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
              <StyledLink to="/signup">新規登録</StyledLink>
              <StyledLink to="/login">ログイン</StyledLink>
            </Stack>
          )}
          {isAuthenticated && <Button value="ログアウト" onClick={handleLogout} />}
        </Stack>
      </StyledHeader>
      <UnderLine />
    </>
  );
};
