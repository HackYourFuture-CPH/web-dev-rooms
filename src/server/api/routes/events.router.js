/* The API routing for events */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const eventsController = require('../controllers/events.controller');

/**
 * @swagger
 * /events:
 *  get:
 *    summary: Get all events
 *    description:
 *      Will return all events.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  eventsController
    .getEvents()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /events/{ID}:
 *  get:
 *    summary: Get events by ID
 *    description:
 *      Will return single event with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the event to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  eventsController
    .getEventById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /events/{userId}/{eventId}:
 *  delete:
 *    summary: Delete an event
 *    description:
 *      Will delete a specific event with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: userId
 *      - in: path
 *        name: eventId
 *        description: ID of the event to delete.
 *    responses:
 *      200:
 *        description: Event deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:userId/:eventId', (req, res) => {
  console.log(req.params);

  eventsController
    .deleteEvent(req.params.userId, req.params.eventId)

    .then((result) => {
      if (result === 0) {
        res.status(404).send('The event ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});
module.exports = router;
