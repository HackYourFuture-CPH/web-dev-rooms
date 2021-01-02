const axios = require('axios');
const { getUserBySlackId } = require('../controllers/users.controller');

async function authMiddleware(req, res, next) {
  if (req.headers.authorization) {
    /** @type {string} */
    const token = req.headers.authorization.split('Bearer ')[1];

    if (token.startsWith('TOKEN:')) {
      const user = await getSeedUser(token);
      req.user = user;
    } else {
      // TODO: use jwt here
      try {
        const slackId = await getSlackIdFromSlack(token);
        req.user = {
          slackId,
          accessToken: token,
        };
      } catch (error) {
        res.status(401).send('Invalid credentials');
      }
    }
  }

  if (req.user && req.user.slackId) {
    const userFromDb = await getUserBySlackId(req.user.slackId);
    req.user = {
      ...req.user,
      ...userFromDb,
    };
  }

  next();
}

/**
 * Gets the seeded user with the specified slack id.
 * @param {string} token
 */
async function getSeedUser(token) {
  const slackId = token.split('TOKEN:')[1].trim();
  return {
    ...(await getUserBySlackId(slackId)),
    accessToken: token,
    slackId,
  };
}

/**
 * Calls slack and retrieves user ID
 *
 * @param {string} token
 * @returns {Promise<string>} A slack id.
 */
async function getSlackIdFromSlack(token) {
  /**
   * {
   *  "ok": true,
   *  "user": {
   *    "name": "",
   *    "id": ""
   *  },
   *  "team": {
   *    "id": "
   *  }
   *}
   */
  const { data } = await axios.get('https://slack.com/api/users.identity', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const slackId = data.user.id;
  return slackId;
}

module.exports = authMiddleware;
