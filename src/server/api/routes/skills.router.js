const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const skillsController = require('../controllers/skills.controller');
/**
 * @swagger
 * /skills:
 *  get:
 *    summary: Get all skills
 *    description:
 *      Will return all skills.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  skillsController
    .getSkills()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /skills/{ID}:
 *  get:
 *    summary: Get skill by ID
 *    description:
 *      Will return single skill with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the skill to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  skillsController
    .getSkillById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
