import React, { useContext } from 'react';
import { UserContext } from './userContext';

const UserTest = () => {
  const { token, login, logout } = useContext(UserContext);
  return token ? (
    <button onClick={logout} type="button">
      log out
    </button>
  ) : (
    <button onClick={login} type="button">
      login
    </button>
  );
};

export default UserTest;
