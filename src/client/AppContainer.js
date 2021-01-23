import React from 'react';
import { ToastContainer } from 'react-toastify';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { UserProvider } from './context/userContext';

function AppContainer() {
  return (
    <>
      <UserProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </UserProvider>

      <ToastContainer />
    </>
  );
}

export default AppContainer;
