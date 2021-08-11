import React, { VFC } from 'react';
import styled from 'styled-components';
import LogoutRequest from '../../../models/LogoutRequest';
import { useAuthUser, useLogout } from '../../context/UserAuthContext';

export const LogoutButton: VFC = () => {
  const authUser = useAuthUser();
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
    <button type="button" onClick={handleLogout}>
      ログアウト
    </button>
  );
};
