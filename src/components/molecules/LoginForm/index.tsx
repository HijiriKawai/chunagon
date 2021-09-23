import { Box, Typography } from '@mui/material';
import { useState, VFC } from 'react';
import styled from 'styled-components';
import LoginRequest from '../../../models/LoginRequest';
import { Button } from '../../atoms/Button';
import { FormInput } from '../../atoms/FormInput';
import { useLogin } from '../../context/UserAuthContext';

const StyledButton = styled(Button)`
  margin-top: 3px;
  margin-bottom: 2px;
`;

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
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5">Login</Typography>
      <Box
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}
      >
        <FormInput
          type="text"
          placeholder="Sample@sample.com"
          label="UserName"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          margin="normal"
        />
        <FormInput
          type="password"
          placeholder="Password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          margin="normal"
        />
        <StyledButton value="Login" onClick={handleLogin} />
      </Box>
    </Box>
  );
};
