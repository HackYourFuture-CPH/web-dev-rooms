const express = require('express');
const requireAuthMiddleware = require('../auth/requireAuthMiddleware');
const userController = require('../controllers/user.controller');

const router = express.Router({ mergeParams: true });

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

/**
 * @swagger
 * /user/register/student:
 *  post:
 *    tags:
 *    - Registration
 *    summary: Register student
 *    description: Registers a new user as a student
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: Student information
 *        description: User provided information
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - groupId
 *          properties:
 *            name:
 *              type: string
 *            groupId:
 *              type: integer
 *    responses:
 *      200:
 *        description: Student Registration created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/register/student', (req, res, next) => {
  userController
    .createStudentRegistration(req.body, req.user)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /user/register/admin:
 *  post:
 *    tags:
 *    - Registration
 *    summary: Register admin
 *    description: Register a new user as an admin
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: Admin information
 *        description: User provided information.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - role
 *          properties:
 *            name:
 *              type: string
 *            role:
 *              type: string
 *    responses:
 *      200:
 *        description: Admin registered successfully.
 *      400:
 *        description: Invalid data was submitted.
 *      401:
 *        description: Authentication missing.
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/register/admin', requireAuthMiddleware, (req, res, next) => {
  userController
    .registerAdmin(req.body, req.user)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
