import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext({});

const LocalStorageKey = 'user';
export function UserProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(function loadUser() {
    const userFromLocalStorage = localStorage.getItem(LocalStorageKey);

    if (userFromLocalStorage) {
      try {
        const parsed = JSON.parse(userFromLocalStorage);
        setUserRole(parsed.role);
        setToken(parsed.accessToken);
        setUser(parsed);
      } catch (e) {
        setToken(null);
        setUserRole(null);
      }
    }

    setIsLoading(false);
  }, []);

  /**
   * User type:
   * {
   *   accessToken: string,
   *   isNewUser: bool
   *   role: string
   * }
   */
  const login = (newUser) => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(user));
    setToken(user.accessToken);
    setUserRole(user.userRole);
    setUser(newUser);
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
        isNewUser: user ? user.isNewUser : false,
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
