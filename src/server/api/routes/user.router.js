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
  userController
    .getUserById(req.params.id, req.params.role)
    .then((result) => res.json(result))
    .catch(next);
});

const studentRegistrationController = require('../controllers/user.controller');
/**
 * @swagger
 * /user/register/student:
 *  post:
 *    summary: Create student registration
 *    description:
 *      Will create an endpoint to register students.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: student registration
 *        description: The module to create an endpoint for registering student.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - slackId
 *            - groupId
 *          properties:
 *            name:
 *              type: string
 *            slackId:
 *              type: integer
 *            groupId:
 *              type: integer
 *    responses:
 *      201:
 *        description: Student Registration created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/register/student', (req, res) => {
  studentRegistrationController
    .createStudentRegistration(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});
module.exports = router;
