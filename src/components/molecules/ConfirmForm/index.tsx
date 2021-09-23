import { Box, Typography } from '@mui/material';
import { useState, VFC } from 'react';
import styled from 'styled-components';
import ConfirmRequest from '../../../models/ConfirmRequest';
import { Button } from '../../atoms/Button';
import { FormInput } from '../../atoms/FormInput';
import { useConfirm, useSignupUser } from '../../context/UserAuthContext';

const StyledButton = styled(Button)`
  margin-top: 3px;
  margin-bottom: 2px;
`;

export const ConfirmForm: VFC = () => {
  const [number, setNumber] = useState('');
  const signupUser = useSignupUser();

  const confirm = useConfirm();

  const handlesignup = () => {
    if (signupUser) {
      const req: ConfirmRequest = {
        token: signupUser.token,
        number,
      };
      confirm(req);
    }
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
      <Typography variant="h5">メールに届いた番号を入力</Typography>
      <Box
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}
      >
        <FormInput
          type="number"
          placeholder="1234"
          label="Number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          margin="normal"
        />
        <StyledButton value="Confirm" onClick={handlesignup} />
      </Box>
    </Box>
  );
};
