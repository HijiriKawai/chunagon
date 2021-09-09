import { useState, VFC } from 'react';
import styled from 'styled-components';
import ConfirmRequest from '../../../models/ConfirmRequest';
import { Button } from '../../atoms/Button';
import { FormInput } from '../../atoms/FormInput';
import { useConfirm, useSignupUser } from '../../context/UserAuthContext';

const StyledDiv = styled.div``;

export const ConfirmForm: VFC = () => {
  const [number, setNumber] = useState('');
  const signupUser = useSignupUser();

  const confirm = useConfirm();

  const handlesignup = (event: React.MouseEvent<HTMLInputElement>) => {
    if (signupUser) {
      const req: ConfirmRequest = {
        token: signupUser.token,
        number,
      };
      confirm(req);
    }
  };

  return (
    <StyledDiv>
      <form>
        <FormInput
          type="text"
          placeholder="1234"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <Button value="Confirm" onClick={handlesignup} />
      </form>
    </StyledDiv>
  );
};
