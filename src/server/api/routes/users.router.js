const express = require('express');

const router = express.Router({ mergeParams: true });
// controllers
const usersController = require('../controllers/users.controller');
/**
 * @swagger
 * /users:
 *  get:
 *    summary: Get all users(excluding deleted users)
 *    description:
 *      Will return all current users.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  usersController
    .getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
