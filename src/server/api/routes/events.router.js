/* The API routing for events */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const eventsController = require('../controllers/events.controller');

/**
 * @swagger
 * /events:
 *  post:
 *    summary: Create an event
 *    description:
 *      Will create an event.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: event
 *        description: To create an event
 *        schema:
 *          type: object
 *          required:
 *            - eventType
 *            - venue
 *            - description
 *            - createdBy
 *          properties:
 *            eventType:
 *              type: string
 *            venue:
 *              type: string
 *            description:
 *              type: string
 *            createdBy:
 *              type: integer
 *    responses:
 *      201:
 *        description: Event created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res) => {
  eventsController
    .createEvent(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

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
