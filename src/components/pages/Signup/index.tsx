import React, { VFC } from 'react';
import { useSignupUser } from '../../context/UserAuthContext';
import { ConfirmForm } from '../../molecules/ConfirmForm';
import { SignupForm } from '../../molecules/SignupForm';

export const Signup: VFC = () => {
  const signupUser = useSignupUser();
  const isSignuped = signupUser != null;
  return (
    <>
      {!isSignuped && <SignupForm />} {isSignuped && <ConfirmForm />}
    </>
  );
};
