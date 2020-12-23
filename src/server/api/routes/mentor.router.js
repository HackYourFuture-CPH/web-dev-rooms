const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const registerMentorController = require('../controllers/mentor.controller');

/**
 * @swagger
 * /user/register/mentor:
 *  post:
 *    summary: Register mentor
 *    description:
 *      Will register mentor.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: mentor
 *        description: To register mentor
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - organization_id
 *          properties:
 *            name:
 *              type: string
 *            organization_id:
 *              type: integer
 *    responses:
 *      201:
 *        description: Event created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res) => {
  registerMentorController
    .registerMentor(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});
module.exports = router;
