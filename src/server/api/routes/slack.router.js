const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const slackController = require('../controllers/slack_users.controller');

router.post('/', (req, res) => {
  slackController
    .loginWithSlack(req.query.code)
    .then((result) => {
      res.json(result);
    })
    .catch(() => {
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
