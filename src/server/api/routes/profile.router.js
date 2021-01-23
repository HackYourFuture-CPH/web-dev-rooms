/* eslint-disable no-irregular-whitespace */
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
 * /profile/student:
 *  patch:
 *    summary: Update a student's profile
 *    description:
 *      Will update the profile.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: profile
 *        description: The module to create.
 *        schema:
 *          type: object
 *          reqiured:
 *            - name
 *            - timezone
 *          properties:
 *            name:
 *              type: string
 *            timezone:
 *              type: string
 *    responses:
 *      200:
 *        description: Profile was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/student', (req, res, next) => {
  profileController
    .editStudentProfile(req.body, req.user.id)
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
 * /profile/admin:
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
router.post('/admin', (req, res) => {
  console.log(req);
  profileController
    .postAdminsProfile(req.body, req.user.id)
    .then((result) => res.json(result));
});
/**
 * @swagger
 * /profile/mentor:
 *  patch:
 *    tags:
 *    - Profile
 *    summary: To update a mentor profile
 *    description:
 *      Will update a mentor profile.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.patch('/mentor', (req, res, next) => {
  // console.log(req.body);
  // console.log(req.user);
  profileController
    .editMentorProfile(req.user.id, req.body)
    .then((result) => {
      if (result === 404) {
        res.status(404).send('not a valid user or user does not exist');
      }
      if (result === 400) {
        res.status(400).send('user name is empty');
      }
      if (result === 1) {
        res.status(200).send('name, timezone and skills updated');
      }
    })
    .catch(next);
});

module.exports = router;
