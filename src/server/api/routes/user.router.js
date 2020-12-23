const express = require('express');
const router = express.Router({ mergeParams: true });

// controllers
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

router.get('/', (req, res) => {
  res.send('POST only API');
});

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
