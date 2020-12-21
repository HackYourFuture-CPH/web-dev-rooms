import React from 'react';
import { ToastContainer } from 'react-toastify';

import App from './App';
import { UserProvider } from './context/userContext';

function AppContainer() {
  return (
    <>
      <UserProvider>
        <App />
      </UserProvider>

      <ToastContainer />
    </>
  );
}

export default AppContainer;
