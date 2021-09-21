import { useState, VFC } from 'react';
import styled from 'styled-components';
import LoginRequest from '../../../models/LoginRequest';
import { Button } from '../../atoms/Button';
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
          placeholder="Sample@sample.com"
          label="UserName"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <FormInput
          type="password"
          placeholder="Password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button value="Login" onClick={handleLogin} />
      </form>
    </StyledDiv>
  );
};
