import { Container, Paper, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { useState, VFC } from 'react';

import { useLogin } from '../../../context/UserAuthContext';
import LoginRequest from '../../../models/LoginRequest';
import { Button } from '../../atoms/Button';
import { FormInput } from '../../atoms/FormInput';

const buttonStyle: SxProps<Theme> = {
  marginBottom: 8,
};

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
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ marginTop: 8 }}>
          Login
        </Typography>
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
        <Button value="Login" onClick={handleLogin} sx={buttonStyle} />
      </Paper>
    </Container>
  );
};
