/* The API routing for events */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const profileController = require('../controllers/profile.controller');

/**
 * @swagger
 * /profile/students:
 *  get:
 *    tags:
 *    - profile
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

router.get('/student', (req, res, next) => {
  profileController
    .getStudentsProfile(req.user.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
