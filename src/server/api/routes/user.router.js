const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const userController = require('../controllers/user.controller');

/**
 * @swagger
 * /user/{ID}/{role}:
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
 *     - in: path
 *       name: role
 *       schema:
 *         type: string
 *         required: true
 *         description: The role of the user
 *    responses:
 *      200:
 *        description: Successful request
 *        schema:
 *           type: "object"
 *           properties:
 *            eventId:
 *              type: "integer"
 *            organization:
 *              type: "string"
 *            eventDate:
 *              type: "string"
 *            eventTime:
 *              type: "string"
 *            eventWeek:
 *              type: "string"
 *            listOfAttendess:
 *              type: "array"
 *              items:
 *                type: string
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id/:role/', (req, res, next) => {
  console.log('polo');
  userController
    .getUserById(req.params.id, req.params.role)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
