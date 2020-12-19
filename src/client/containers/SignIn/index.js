import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';

import SignIn from '../../components/Forms/SignIn';
import Loader from '../../components/Loader';

function signIn({ login }) {
  // eslint-disable-next-line
  console.warn('Sign in is not implemented!');
  login();
}

export default function SignInContainer() {
  const { login } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    await signIn({ email, password, login });
    setIsLoading(false);
  };
  if (isLoading) return <Loader />;
  return <SignIn onSubmit={onSubmit} />;
}
