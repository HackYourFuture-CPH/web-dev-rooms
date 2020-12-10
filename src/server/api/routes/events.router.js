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

module.exports = router;
