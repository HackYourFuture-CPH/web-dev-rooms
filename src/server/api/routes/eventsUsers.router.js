/* The API routing for events users */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const eventsUsersController = require('../controllers/eventsUsers.controller');

/**
 * @swagger
 * /events/registered:
 *  get:
 *    summary: Get events that the user has registered for
 *    description:
 *      Will return all events that the user has registered for.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  eventsUsersController
    .getEventsForUser(req.user.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
