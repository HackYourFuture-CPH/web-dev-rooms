/* The API routing for events */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const studentsProfileController = require('../controllers/studentsprofile.controller');

/**
 * @swagger
 * /profile/students:
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

module.exports = router;
