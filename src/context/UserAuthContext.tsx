import axios from 'axios';
import { FC, createContext, useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import ConfirmRequest from '../models/ConfirmRequest';
import LoginRequest from '../models/LoginRequest';
import LoginResponse from '../models/LoginResponse';
import LogoutRequest from '../models/LogoutRequest';
import SignupRequest from '../models/SignupRequest';
import SignupResponse from '../models/SignupResponse';
import baseUrl from '../utils/ApiUrl';

const AuthUserContext = createContext<LoginResponse | null>(null);
const SignupUserContext = createContext<SignupResponse | null>(null);

type OperationType = {
  login: (req: LoginRequest) => void;
  logout: (req: LogoutRequest) => void;
};
const AuthOperationContext = createContext<OperationType>({
  login: (_) => {},
  logout: (_) => {},
});

type SignupOperationType = {
  signup: (req: SignupRequest) => void;
  confirm: (req: ConfirmRequest) => void;
};
const SignupOperationContext = createContext<SignupOperationType>({
  signup: (_) => {},
  confirm: (_) => {},
});

export const AuthUserProvider: FC = ({ children }) => {
  const [authUser, setAuthUser] = useState<LoginResponse | null>(null);
  const [signupUser, setSignupUser] = useState<SignupResponse | null>(null);
  const history = useHistory();
  const base = baseUrl();

  const signup = async (req: SignupRequest) => {
    const url = `${base}/signup`;
    const json = JSON.stringify(req);

    axios
      .post(url, json, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((Response) => {
        const obj: SignupResponse = {
          token: Response.data.token,
        };
        setSignupUser(obj);
      })
      .catch((Error) => {
        <Redirect to="/signup" />;
      });
  };

  const confirm = async (req: ConfirmRequest) => {
    const url = `${base}/signup/confirm`;

    const json = JSON.stringify(req);

    axios
      .post(url, json, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((Response) => {
        const obj: LoginResponse = {
          accessToken: Response.data.access_token,
          refreshToken: Response.data.refresh_token,
        };
        setAuthUser(obj);
        history.push('/home');
      })
      .catch((Response) => {
        <Redirect to="/signup" />;
      });
  };

  const login = async (req: LoginRequest) => {
    const url = `${base}/login`;
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
        history.push('/home');
      })
      .catch((Response) => {
        <Redirect to="/login" />;
      });
  };

  const logout = async (req: LogoutRequest) => {
    const url = `${base}/login`;
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
        <Redirect to="/home" />;
      });
  };

  return (
    <AuthOperationContext.Provider value={{ login, logout }}>
      <SignupOperationContext.Provider value={{ signup, confirm }}>
        <AuthUserContext.Provider value={authUser}>
          <SignupUserContext.Provider value={signupUser}>{children}</SignupUserContext.Provider>
        </AuthUserContext.Provider>
      </SignupOperationContext.Provider>
    </AuthOperationContext.Provider>
  );
};

export const useAuthUser = () => useContext(AuthUserContext);
export const useSignupUser = () => useContext(SignupUserContext);
export const useLogin = () => useContext(AuthOperationContext).login;
export const useLogout = () => useContext(AuthOperationContext).logout;
export const useSignup = () => useContext(SignupOperationContext).signup;
export const useConfirm = () => useContext(SignupOperationContext).confirm;
