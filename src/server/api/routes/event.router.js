const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const eventController = require('../controllers/event.controller');

/**
 * @swagger
 * /event:
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
 *            - event_type
 *            - venue
 *            - description
 *            - created_by
 *          properties:
 *            event_type:
 *              type: string
 *            venue:
 *              type: string
 *            description:
 *              type: string
 *            created_by:
 *              type: integer
 *    responses:
 *      201:
 *        description: Event created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  console.log('event created');
  eventController
    .event(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
