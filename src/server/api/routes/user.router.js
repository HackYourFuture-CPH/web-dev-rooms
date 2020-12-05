const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const userController = require('../controllers/user.controller');

/**
 * @swagger
 * /user:
 *  get:
 *    summary: Get all user
 *    description:
 *      Will return all user.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  userController
    .getUser()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /user/{ID}:
 *  get:
 *    summary: Get user by ID
 *    description:
 *      Will return single user with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the user to get
 *    responses:
 *      200:
 *        description: Successful request
 *        schema:
 *           type: "object"
 *           properties:
 *            eventId:
 *              type: "integer"
 *            eventDate:
 *              type: "string"
 *            eventTime:
 *              type: "string"
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id/', (req, res, next) => {
  console.log('polo');
  userController
    .getUserById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
