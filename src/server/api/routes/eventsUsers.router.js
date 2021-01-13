/* The API routing for events users */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const eventsUsersController = require('../controllers/eventsUsers.controller');

/**
 * @swagger
 * /eventsUsers/{userID}:
 *  get:
 *    summary: Get events by a user with userID
 *    description:
 *      Will return  events with a matching userID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: userID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The userID of the event to get
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:userID/', (req, res, next) => {
  eventsUsersController
    .getUserEventsByUID(req.params.userID)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
