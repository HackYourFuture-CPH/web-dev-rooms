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
 *            - student_id
 *            - question_id
 *            - answered_by
 *            - description
 *            - open_feedback
 *          properties:
 *            student_id:
 *              type: integer
 *            question_id:
 *              type: integer
 *            answered_by:
 *              type: integer
 *            description:
 *              type: string
 *            open_feedback:
 *              type: string
 *    responses:
 *      201:
 *        description: Feedback created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  console.log('feedback posted');
  feedbacksController
    .createFeedback(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
