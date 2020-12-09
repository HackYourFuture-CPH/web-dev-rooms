const axios = require('axios');

const getSlackAuth = async (code) => {
  const clienId = process.env.SLACK__CLIENT_ID;
  const clientSecret = process.env.SLACK_CLIENT_SECRET;
  try {
    const url = `https://slack.com/api/oauth.v2.access?client_id=${clienId}&client_secret=${clientSecret}&code=${code}`;
    const getToken = await axios.get(url);
    const accsessToken = getToken.data.authed_user.access_token;
    return accsessToken;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getSlackAuth,
};
