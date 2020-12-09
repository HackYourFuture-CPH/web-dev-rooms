import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext({});

export function UserProvider(props) {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('tokenName');

    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage);
    }
  }, []);
  const login = () => {
    console.log('login');
    const Apitoken = 'aaa';
    localStorage.setItem('tokenName', Apitoken);
    setToken(Apitoken);
  };
  const logout = () => {
    localStorage.removeItem('tokenName');
    setToken(null);
    /* alert("token will delete") */
  };
  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
