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
 *        description: To create an event
 *        schema:
 *          type: object
 *          required:
 *            - event_type
 *            - event_date
 *            - venue
 *            - description
 *            - max_participants
 *            - created_by
 *            - created_at
 *            - updated_at
 *          properties:
 *            event_type:
 *              type: string
 *            event_date:
 *              type: string
 *              format: date
 *            venue:
 *              type: string
 *            description:
 *              type: string
 *            max_participants:
 *              type: integer
 *            created_by:
 *              type: integer
 *            created_at:
 *              type: string
 *              format: date
 *            updated_at:
 *              type: string
 *              format: date
 *    responses:
 *      201:
 *        description: Event created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  console.log('event created');
  createEventController
    .createEvent(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
