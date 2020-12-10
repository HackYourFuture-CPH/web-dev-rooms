const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const organizationsController = require('../controllers/organizations.controller');
/**
 * @swagger
 * /organizations:
 *  get:
 *    summary: Get all organizations
 *    description:
 *      Will return all organizations.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  organizationsController
    .getOrganizations()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
