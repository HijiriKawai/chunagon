import React, { useState, VFC } from 'react';
import styled from 'styled-components';
import LoginRequest from '../../../models/LoginRequest';
import { FormButton } from '../../atoms/FormButton';
import { FormInput } from '../../atoms/FormInput';
import { useLogin } from '../../context/UserAuthContext';

const StyledDiv = styled.div``;

export const LoginForm: VFC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = useLogin();

  const handleLogin = () => {
    const req: LoginRequest = {
      grant_type: 'password',
      username: userName,
      password,
    };
    login(req);
  };

  return (
    <StyledDiv>
      <form>
        <FormInput
          type="text"
          placeholder="UserName"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <FormInput
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FormButton value="Login" onClick={handleLogin} />
      </form>
    </StyledDiv>
  );
};
