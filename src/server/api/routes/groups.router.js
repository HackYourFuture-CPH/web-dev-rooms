const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const groupsController = require('../controllers/groups.controller');

const generalError = (res) => (error) => {
  res.status(400);
  res.send(error.toString()); // instead of .message
};
/**
 * @swagger
 * /groups:
 *  get:
 *    summary: Get all groups
 *    description:
 *      Will return all groups.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res) => {
  groupsController
    .getGroups()
    .then((result) => res.json(result))
    .catch(generalError(res));
});

/**
 * @swagger
 * /groups/{ID}:
 *  get:
 *    summary: Get group by ID
 *    description:
 *      Will return single group with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the group to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res) => {
  groupsController
    .getGroupById(req.params.id)
    .then((result) => res.json(result))
    .catch(generalError(res));
});

module.exports = router;
