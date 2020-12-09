const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const slackController = require('../controllers/slack_users.controller');

router.post('/', (req, res) => {
  console.log('req is', req);
  slackController
    .getSlackAuth(req.query.code)
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
