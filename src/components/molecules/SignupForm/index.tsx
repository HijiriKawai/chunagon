import { Box, Typography } from '@mui/material';
import { useState, VFC } from 'react';
import styled from 'styled-components';
import SignupRequest from '../../../models/SignupRequest';
import { Button } from '../../atoms/Button';
import { FormInput } from '../../atoms/FormInput';
import { useSignup } from '../../context/UserAuthContext';

const StyledButton = styled(Button)`
  margin-top: 3px;
  margin-bottom: 2px;
`;

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
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5">Signup</Typography>
      <Box
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}
      >
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
        <StyledButton value="Signup" onClick={handleSignup} />
      </Box>
    </Box>
  );
};
