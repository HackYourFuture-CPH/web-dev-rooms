import React from 'react';

// importing slack oauth url from config in backend
import slackCred from '../../../server/Slack/config';

const axios = require('axios');

const SignInWithSlack = () => {
  const slackUrl = slackCred.SLACK_OAUTH_URL;
  const getCode = () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      axios.post(`/api/sign-in${code}`);
    }
  };

  return (
    <div>
      <a href={slackUrl}>
        <button type="submit" onSubmit={getCode}>
          <img
            alt="Sign in with Slack"
            src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
            srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
          />
        </button>
      </a>
    </div>
  );
};

export default SignInWithSlack;
