import { Container, Paper, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { useState, VFC } from 'react';

import { useSignup } from '../../../context/UserAuthContext';
import SignupRequest from '../../../models/SignupRequest';
import { Button } from '../../atoms/Button';
import { FormInput } from '../../atoms/FormInput';

const buttonStyle: SxProps<Theme> = {
  marginBottom: 8,
};

export const SignupForm: VFC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = useSignup();

  const handleSignup = () => {
    const req: SignupRequest = {
      email,
      password,
    };
    signup(req);
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
          Signup
        </Typography>
        <FormInput
          type="text"
          placeholder="Sample@sample.com"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        <Button value="Signup" onClick={handleSignup} sx={buttonStyle} />
      </Paper>
    </Container>
  );
};
