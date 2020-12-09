import React from 'react';
import Button from '../../components/SignInButton/Button';
import { HyfLogo } from '../../components/HyfBigLogo/HyfBigLogo.stories';

export default function LoginPage() {
  const authenticateUser = () => {
    return null;
  };
  return (
    <>
      <HyfLogo />
      <Button onClick={authenticateUser} />
    </>
  );
}
