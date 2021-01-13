import './LoginTestPage.styles.css';

import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { HyfLogo } from '../../components/HyfBigLogo/HyfBigLogo.stories';
import { Layout } from '../../components/Layout';
import { useUser } from '../../context/userContext';
import { useQuery } from '../../hooks/useQuery';
import Loader from '../../components/Loader';

export default function LoginTest() {
  const { login } = useUser();
  const history = useHistory();

  const { data: users, loading } = useQuery(`/api/users`);

  function fakeLogin(user) {
    axios
      .get('/api/self', {
        headers: {
          Authorization: `Bearer TOKEN:${user.slackId}`,
        },
      })
      .then((r) => {
        login(r.data);
        history.push('/');
      });
  }

  function randomUser() {
    axios
      .get('/api/self', {
        headers: {
          Authorization: `Bearer TOKEN:NEWSLACKID${new Date().getTime()}`,
        },
      })
      .then((r) => {
        login(r.data);
        history.push('/');
      });
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout className="login-test-page">
      <HyfLogo />

      <hr />

      <h2>Log in as:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Button onClick={() => fakeLogin(user)}>{user.name}</Button>
          </li>
        ))}
      </ul>

      <span>For testing registration: create a new account</span>
      <Button onClick={randomUser}>Login as random user</Button>

      <hr />
      <p className="text-center">
        Or login with <Link to="/login">Slack</Link>.
      </p>
    </Layout>
  );
}
