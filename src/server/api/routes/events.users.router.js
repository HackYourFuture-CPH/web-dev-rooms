/* The API routing for events */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const eventsUsersController = require('../controllers/events.users.controller');

/**
 * @swagger
 * /events_users:
 *  delete:
 *    summary: Delete user event registration by userId, eventId, userIdMentor
 *    description:
 *      Will delete user future event registration/subscription.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: eventId
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the event
 *     - in: query
 *       name: userIdMentor
 *       schema:
 *         type: integer
 *         required: true
 *         description: The USER ID of the mentor
 *     - in: query
 *       name: userId
 *       schema:
 *         type: integer
 *         required: true
 *         description: The USER ID of the user
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      400:
 *        description: Bad request.
 *      403:
 *        description: Unauthorized.
 *      500:
 *        description: Internal server error.
 */

router.delete('', (req, res) => {
  eventsUsersController
    .deleteUserEventRegistration(
      req.query.userId,
      req.query.eventId,
      req.query.userIdMentor,
    )
    .then((result) => res.json(result))
    .catch((error) => {
      if (error.name && ['Unauthorized', 'Bad request'].includes(error.name)) {
        res.status(error.httpStatus).send(error.body);
      } else {
        console.error(error);
        res.status(500).send('Internal server error');
      }
    });
});

module.exports = router;
