import { useState, VFC } from 'react';
import styled from 'styled-components';
import SignupRequest from '../../../models/SignupRequest';
import { Button } from '../../atoms/Button';
import { FormInput } from '../../atoms/FormInput';
import { useSignup } from '../../context/UserAuthContext';

const StyledDiv = styled.div``;

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
    <StyledDiv>
      <form>
        <FormInput
          type="text"
          placeholder="Sample@sample.com"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInput
          type="password"
          placeholder="Password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button value="Signup" onClick={handleSignup} />
      </form>
    </StyledDiv>
  );
};
