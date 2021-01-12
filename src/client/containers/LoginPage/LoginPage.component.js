import React from 'react';
import { Link } from 'react-router-dom';

import { HyfLogo } from '../../components/HyfBigLogo/HyfBigLogo.stories';
import { Layout } from '../../components/Layout';
import Button from '../../components/SignInButton/Button';

export default function LoginPage() {
  const authenticateUser = () => {
    const clientId = process.env.REACT_APP_SLACK_CLIENT_ID;
    const oauthUrl = `https://slack.com/oauth/v2/authorize?client_id=${clientId}&user_scope=identity.basic`;
    window.location = oauthUrl;
  };

  // Disable for the demo
  // const showTestLogin = process.env.NODE_ENV === 'development';
  const showTestLogin = true;

  return (
    <Layout>
      <HyfLogo />
      <Button onClick={authenticateUser} />

      {showTestLogin ? (
        <>
          <hr />
          <p className="text-center py-2">
            <span>Or use a test login:</span>{' '}
            <Link to="/login-test">Test login</Link>
          </p>
        </>
      ) : null}
    </Layout>
  );
}
