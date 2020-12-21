const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const feedbacksController = require('../controllers/feedbacks.controller');

/**
 * @swagger
 * /feedbacks:
 *  post:
 *    summary: Create a feedback
 *    description:
 *      Will create a feedback.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: feedback
 *        description: The feedback to create.
 *        schema:
 *          type: object
 *          required:
 *            - studentId
 *            - description
 *            - eventId
 *          properties:
 *            studentId:
 *              type: integer
 *            description:
 *              type: string
 *            eventId:
 *              type: integer
 *    responses:
 *      201:
 *        description: Feedback created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  feedbacksController
    .createFeedback(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
