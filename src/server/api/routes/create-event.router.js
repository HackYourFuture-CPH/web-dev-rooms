const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const createEventController = require('../controllers/create_event.controller');

/**
 * @swagger
 * /createEvent:
 *  post:
 *    summary: Create an event
 *    description:
 *      Will create an event.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: event
 *        description: The event to create.
 *        schema:
 *          type: object
 *          required:
 *            - event_type
 *            - event_date
 *            - venue
 *            - description
 *            - max_participants
 *          properties:
 *            event_type:
 *              type: integer
 *            event_date:
 *              type: datetime
 *            venue:
 *              type: string
 *            description:
 *              type: string
 *            max_participants:
 *              type: integer
 *    responses:
 *      201:
 *        description: createEvent created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  console.log('event posted');
  createEventController
    .createEvent(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
