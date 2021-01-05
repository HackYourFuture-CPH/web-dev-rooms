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
    localStorage.setItem(LocalStorageKey, JSON.stringify(newUser));
    setToken(newUser.accessToken);
    setUserRole(newUser.role);
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
        id: user ? user.id : undefined,
        token: token || '',
        login,
        logout,
        userRole: userRole || '',
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

/**
 * Gets the current value for UserContext
 *
 * @typedef {object} UserContextType
 * @property {number|undefined} id = Id of the current user, undefined if new user or not logged in.
 * @property {boolean} isLoading - True if the user information is still being fetched.
 * @property {boolean} isAuthenticated - True if the user is logged in
 * @property {boolean} isNewUser - True if the logged in user hasn't registered yet.
 * @property {string} token - Token of the current user. If not logged in, empty string.
 * @property {'student' | 'mentor' | 'admin' | undefined} userRole - The role of the current user.
 * @property {(user) => void} login - Save the specified user information in the context.
 * @property {() => void} logout - Logs out current user and clears all data.
 *
 * @export
 * @returns {UserContextType} Information about user.
 */
export function useUser() {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('Must be under UserProvider');
  }

  return user;
}
