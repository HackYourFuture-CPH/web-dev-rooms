import React from 'react';

import { HyfLogo } from '../../components/HyfBigLogo/HyfBigLogo.stories';
import { Layout } from '../../components/Layout';
import Button from '../../components/SignInButton/Button';

export default function LoginPage() {
  const authenticateUser = () => {
    const clientId = process.env.SLACK_CLIENT_ID;
    const oauthUrl = `https://slack.com/oauth/v2/authorize?client_id=${clientId}&user_scope=identity.basic`;
    window.location = oauthUrl;
  };

  return (
    <Layout>
      <HyfLogo />
      <Button onClick={authenticateUser} />
    </Layout>
  );
}
