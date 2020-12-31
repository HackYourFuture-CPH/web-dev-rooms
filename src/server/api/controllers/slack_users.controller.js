const axios = require('axios');

const { getUserBySlackId } = require('./users.controller');

/**
 * An example response from the Slack API
 *
 * {
 *   ok: true,
 *   app_id: 'A01EDF3RYTW',
 *   authed_user: {
 *     id: 'ID',
 *     scope: 'identity.basic',
 *     access_token: 'xoxp-...',
 *     token_type: 'user'
 *   },
 *   team: { id: 'team id' },
 *   enterprise: null,
 *   is_enterprise_install: false
 * }
 */
const loginWithSlack = async (code) => {
  const clientId = process.env.SLACK_CLIENT_ID;
  const clientSecret = process.env.SLACK_CLIENT_SECRET;
  try {
    const url = `https://slack.com/api/oauth.v2.access?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`;
    const { data } = await axios.get(url);

    const accessToken = data.authed_user.access_token;

    const user = await getUserBySlackId(data.authed_user.id);

    return {
      ...user,
      accessToken,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  loginWithSlack,
};
