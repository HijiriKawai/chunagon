import { VFC } from 'react';

import { useSignupUser } from '../../../context/UserAuthContext';
import { ConfirmForm } from '../../molecules/ConfirmForm';
import { SignupForm } from '../../molecules/SignupForm';

export const Signup: VFC = () => {
  const signupUser = useSignupUser();
  const isSigned = signupUser != null;
  return (
    <>
      {!isSigned && <SignupForm />} {isSigned && <ConfirmForm />}
    </>
  );
};
