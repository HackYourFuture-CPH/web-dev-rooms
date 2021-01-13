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
// create a skill
/**
 * @swagger
 * /skills:
 *  post:
 *    summary: Creates a skill
 *    description:
 *      Will create a skill.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: name
 *        description: To create a skill
 *        schema:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *            name:
 *              type: string
 *
 *    responses:
 *      201:
 *        description: skill created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  skillsController
    .createSkill(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

// edit a skill
/**
 * @swagger
 * /skills/{ID}:
 *  patch:
 *    summary: create a skill
 *    description:
 *      Will edit a skill
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the skill to patch.
 *      - in: body
 *        name: name
 *        description: The skill to create.
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *    responses:
 *      200:
 *        description: skill was patched
 *      5XX:
 *        description: Unexpected error.
 */

router.patch('/:id', (req, res, next) => {
  skillsController
    .editSkill(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

// delete a skill
/**
 * @swagger
 * /skills/{skillId}:
 *  delete:
 *    summary: Delete a skill
 *    description:
 *      Will delete a skill with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: skillId
 *        description: ID of the skill to delete.
 *    responses:
 *      200:
 *        description: skill deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:skillId', (req, res, next) => {
  skillsController
    .deleteSkill(req.params.skillId, req)
    .then((result) => {
      if (result === 0) {
        res.status(404).send('The skill Id you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch(next);
});

module.exports = router;
