import React, { useContext } from 'react';
import { UserContext, UserProvider } from './userContext';

const TestButton = () => {
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

const AppWithStore = () => {
  return (
    <UserProvider>
      <TestButton />
    </UserProvider>
  );
};

export default AppWithStore;
