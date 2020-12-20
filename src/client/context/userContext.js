import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext({});

export function UserProvider(props) {
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('tokenName');

    if (tokenFromLocalStorage) {
      setUserRole('student');
      setToken(tokenFromLocalStorage);
    }
  }, []);
  const login = () => {
    const Apitoken = 'aaa';
    localStorage.setItem('tokenName', Apitoken);
    setToken(Apitoken);
    setUserRole('student');
  };
  const logout = () => {
    localStorage.removeItem('tokenName');
    setToken(null);
    setUserRole(null);
  };
  return (
    <UserContext.Provider value={{ token, login, logout, userRole }}>
      {props.children}
    </UserContext.Provider>
  );
}
