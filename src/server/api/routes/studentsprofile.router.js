/* The API routing for events */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const studentsProfileController = require('../controllers/studentsprofile.controller');

/**
 * @swagger
 * /students/profile:
 *  get:
 *    summary: Get all students profile
 *    description:
 *      Will return all students profile.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  studentsProfileController
    .getStudentsProfile()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /student/profile/{ID}:
 *  get:
 *    summary: Get student profile by ID
 *    description:
 *      Will return single student profile with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the event to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/:id', (req, res, next) => {
  studentsProfileController
    .getStudentProfileById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
