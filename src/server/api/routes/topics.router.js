const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const topicsController = require('../controllers/topics.controller');
/**
 * @swagger
 * /topics:
 *  get:
 *    summary: Get all topics
 *    description:
 *      Will return all topics.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  topicsController
    .getTopics()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /topics/{ID}:
 *  get:
 *    summary: Get topic by ID
 *    description:
 *      Will return single topic with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the topic to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  topicsController
    .getTopicById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
