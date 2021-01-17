/* The API routing for events */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const profileController = require('../controllers/profile.controller');

/**
 * @swagger
 * /profile/student:
 *  get:
 *    tags:
 *    - Profile
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

/**
 * @swagger
 * /profile/admin:
 *  get:
 *    tags:
 *    - Profile
 *    summary: Get all admins profile
 *    description:
 *      Will return all admins profile.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/admin', (req, res, next) => {
  profileController
    .getAdminsProfile(req.user.id)
    .then((result) => res.json(result))
    .catch(next);
});

// create a admin
/**
 * @swagger
 * /profile/admin/{ID}:
 *  post:
 *    tags:
 *    - Profile
 *    summary: Creates a admin
 *    description:
 *      Will create a admin.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: adminRole
 *        description: To create a admin
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - role
 *          properties:
 *            name:
 *              type: string
 *            role:
 *              type: integer
 *
 *    responses:
 *      201:
 *        description: admin created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/admin', (req, res, next) => {
  console.log(req);
  profileController
    .postAdminsProfile(req.body, req.user.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
