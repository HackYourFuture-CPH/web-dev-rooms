import React, { useEffect, useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import axios from 'axios';

import { useUser } from '../../context/userContext';
import HyfBigLogo from '../../components/HyfBigLogo/HyfBigLogo';

import './SlackAuthPage.styles.css';

export default function SlackAuthPage() {
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const { login } = useUser();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    axios
      .post(`/api/signin?code=${code}`)
      .then((r) => {
        login(r.data);
        setUser(r.data);
      })
      .catch(() => {
        setIsError(true);
      });
    // login should not retrigger this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  if (user && user.isNewUser) {
    return <Redirect to="/registration" />;
  }

  return (
    <div className="slack-auth-page">
      <HyfBigLogo />

      <h1>Login with Slack</h1>

      {isError ? (
        <>
          <p className="text-danger">
            There has been an error. Try to login again.{' '}
            <Link to="/login">Login</Link>
          </p>
        </>
      ) : (
        <p>Please wait...</p>
      )}
    </div>
  );
}
