const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const organizationsController = require('../controllers/organizations.controller');
/**
 * @swagger
 * /organization:
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

/**
 * @swagger
 * /organizations/organizations_id:
 *  get:
 *    summary: Get organization by ID
 *    description:
 *      Will return single organization with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the organization to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  organizationsController
    .getOrganizationsById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /organizations/organizations_id/name:
 *  get:
 *    summary: Get organization name by ID
 *    description:
 *      Will return single organization name with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the organization to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id/name', (req, res, next) => {
  organizationsController
    .getOrganizationsById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
/**
 * @swagger
 * /organizations/organizations_id/imageUrl:
 *  get:
 *    summary: Get organization imageUrl by ID
 *    description:
 *      Will return single organization imageUrl with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the organization to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id/imageUrl', (req, res, next) => {
  organizationsController
    .getOrganizationsById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
