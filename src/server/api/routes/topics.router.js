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

/**
 * @swagger
 * /topics:
 *  post:
 *    summary: Create a topic
 *    description:
 *      Will create a topic.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: topic
 *        description: The topic to create.
 *        schema:
 *          type: object
 *          required:
 *            - topicName
 *            - weekNumber
 *            - readmeUrl
 *            - lessonUrl
 *            - homeworkUrl
 *            - moduleId
 *          properties:
 *            topicName:
 *              type: string
 *            weekNumber:
 *              type: integer
 *            readmeUrl:
 *              type: varchar
 *            lessonUrl:
 *              type: varchar
 *            homeworkUrl:
 *              type: varchar
 *            moduleId:
 *              type: integer
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  topicsController
    .createTopic(req.body)
    .then((result) => res.json(result))
    .catch(() => {
      res.status(400).send('Bad request').end();
    });
});

/**
 * @swagger
 * /topics/{ID}:
 *  patch:
 *    summary: Create a topic
 *    description:
 *      Will create a topic.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the topic to patch.
 *      - in: body
 *        name: topic
 *        description: The topic to create.
 *        schema:
 *          type: object
 *          properties:
 *            topicName:
 *              type: string
 *            weekNumber:
 *              type: integer
 *            readmeUrl:
 *              type: varchar
 *            lessonUrl:
 *              type: varchar
 *            homeworkUrl:
 *              type: varchar
 *            moduleId:
 *              type: integer
 *    responses:
 *      200:
 *        description: Topic was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  topicsController
    .editTopic(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /topics/{ID}:
 *  delete:
 *    summary: Delete a topic
 *    description:
 *      Will delete a topic with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the topic to delete.
 *    responses:
 *      200:
 *        description: Topic deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  topicsController
    .deleteTopic(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the topic id does not exist
      if (result === 0) {
        res.status(404).send('The topic ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
