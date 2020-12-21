const axios = require('axios');
const { getUserBySlackId } = require('../controllers/users.controller');

async function authMiddleware(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split('Bearer ')[1];
    // TODO: use jwt here
    switch (token) {
      case 'student':
        req.user = {
          id: 1,
          role: 'student',
          slackId: 'deepti14',
        };
        break;

      case 'mentor':
        req.user = {
          id: 101,
          role: 'mentor',
          slackId: 'mentor_zendesk',
        };
        break;

      case 'admin':
        req.user = {
          id: 1001,
          role: 'admin',
          slackId: 'admin1',
        };
        break;

      default:
        // TODO: real auth with Slack here
        try {
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
          const { data } = await axios.get(
            'https://slack.com/api/users.identity',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          const slackId = data.user.id;
          req.user = {
            slackId,
          };
        } catch (error) {
          res.status(401).send('Invalid credentials');
        }

        break;
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

module.exports = authMiddleware;
