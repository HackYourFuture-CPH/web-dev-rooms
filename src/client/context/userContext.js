import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext({});

const LocalStorageKey = 'user';
export function UserProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(function loadUser() {
    const userFromLocalStorage = localStorage.getItem(LocalStorageKey);

    if (userFromLocalStorage) {
      try {
        const user = JSON.parse(userFromLocalStorage);
        setUserRole(user.role);
        setToken(user.token);
      } catch (e) {
        setToken(null);
        setUserRole(null);
      }
    }

    setIsLoading(false);
  }, []);

  const login = (role, apiToken) => {
    localStorage.setItem(
      LocalStorageKey,
      JSON.stringify({
        role,
        token: apiToken,
      }),
    );
    setToken(apiToken);
    setUserRole(role);
  };

  const logout = () => {
    localStorage.removeItem(LocalStorageKey);
    setToken(null);
    setUserRole(null);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        login,
        logout,
        userRole,
        isLoading,
        isAuthenticated: !!token,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

UserProvider.defaultProps = {
  children: null,
};

export function useUser() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('Must be under UserProvider');
  }

  return user;
}
