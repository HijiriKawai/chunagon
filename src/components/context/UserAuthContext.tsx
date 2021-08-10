import axios from 'axios';
import React, { FC, createContext, useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import LoginRequest from '../../models/LoginRequest';
import LoginResponse from '../../models/LoginResponse';
import LogoutRequest from '../../models/LogoutRequest';

const AuthUserContext = createContext<LoginResponse | null>(null);

type OperationType = {
  login: (req: LoginRequest) => void;
  logout: (req: LogoutRequest) => void;
};
const AuthOperationContext = createContext<OperationType>({
  login: (_) => {},
  logout: (_) => {},
});

export const useAuthUser = () => useContext(AuthUserContext);
export const useLogin = () => useContext(AuthOperationContext).login;

export const AuthUserProvider: FC = ({ children }) => {
  const [authUser, setAuthUser] = useState<LoginResponse | null>(null);
  const history = useHistory();

  const login = async (req: LoginRequest) => {
    const url = 'http://localhost:8888/login';
    const params = new URLSearchParams();

    params.append('grant_type', req.grant_type);
    params.append('username', req.username);
    params.append('password', req.password);

    axios
      .post(url, params)
      .then((Response) => {
        const obj: LoginResponse = {
          accessToken: Response.data.access_token,
          refreshToken: Response.data.refresh_token,
        };
        setAuthUser(obj);
        history.push('/');
      })
      .catch((Response) => {
        <Redirect to="/Login" />;
      });
  };

  const logout = async (req: LogoutRequest) => {
    const url = 'http://localhost:8888/login';
    const params = new URLSearchParams();

    params.append('grant_type', req.grant_type);
    params.append('refresh_token', req.refresh_token);

    axios
      .post(url, params)
      .then((Response) => {
        setAuthUser(null);
        history.push('/');
      })
      .catch((Response) => {
        <Redirect to="/Login" />;
      });
  };

  return (
    <AuthOperationContext.Provider value={{ login, logout }}>
      <AuthUserContext.Provider value={authUser}>{children}</AuthUserContext.Provider>
    </AuthOperationContext.Provider>
  );
};
