const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const eventDetailController = require('../controllers/eventDetail.controller');

/**
 * @swagger
 * /events/{eventId}/details:
 *  get:
 *    summary: Get the detail for a specific event
 *    description:
 *      Will filter that specific event and return some speccific information.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: eventId
 *        description: Details of the specific event.
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('', (req, res, next) => {
  eventDetailController
    .eventDetail(req.params.eventId)
    .then((result) => res.json(result))
    .catch(next);
});
module.exports = router;
