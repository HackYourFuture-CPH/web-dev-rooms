/* The API routing for events */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const eventsController = require('../controllers/events.controller');

/**
 * @swagger
 * /events:
 *  post:
 *    summary: Create an event
 *    description:
 *      Will create an event.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: event
 *        description: To create an event
 *        schema:
 *          type: object
 *          required:
 *            - eventType
 *            - venue
 *            - description
 *            - createdBy
 *          properties:
 *            eventType:
 *              type: string
 *            venue:
 *              type: string
 *            description:
 *              type: string
 *            createdBy:
 *              type: integer
 *    responses:
 *      201:
 *        description: Event created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res) => {
  eventsController
    .createEvent(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

/**
 * @swagger
 * /events:
 *  get:
 *    summary: Get all events
 *    description:
 *      Will return all events.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  eventsController
    .getEvents()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /events/{ID}:
 *  get:
 *    summary: Get events by ID
 *    description:
 *      Will return single event with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the event to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/:id', (req, res, next) => {
  eventsController
    .getEventById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /events/{userId}/{eventId}:
 *  delete:
 *    summary: Delete an event
 *    description:
 *      Will delete a specific event with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: userId
 *      - in: path
 *        name: eventId
 *        description: ID of the event to delete.
 *    responses:
 *      200:
 *        description: Event deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:userId/:eventId', (req, res) => {
  eventsController
    .deleteEvent(req.params.userId, req.params.eventId)
    .then((result) => {
      if (result === 0) {
        res.status(404).send('The event ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

// edit an event

/**
 * @swagger
 * /events/{EID}/{UID}:
 *  patch:
 *    summary: Edit an event
 *    description:
 *      Will edit an event.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: EID, UID
 *        description: EID is the event ID to patch, and UID is the User ID to edit
 *      - in: body
 *        name: event
 *        description: The event to edit.
 *        schema:
 *          type: object
 *          properties:
 *            venue:
 *              type: string
 *    responses:
 *      200:
 *        description: Event was patched
 *      5XX:
 *        description: Unexpected error.
 */

router.patch('/:eid/:uid', (req, res) => {
  eventsController
    .editEvent(req.params.eid, req.params.uid, req.body)
    .then((result) => {
      if (result === 0) {
        res.status(404).send('The event ID you provided does not exist.');
      } else if (result === 'not an admin') {
        res.status(403).send(`${req.params.uid} is not an administrator`);
/**
 * @swagger
 * /events/{eventId}/cancel/{studentId}:
 *  delete:
 *    summary: Delete a student from event
 *    description:
 *      Will delete a the student from specifice event
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: eventId
 *      - in: path
 *        name: studentId
 *        description: ID of the student to delete.
 *    responses:
 *      200:
 *        description: student deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:eventId/cancel/:studentId', (req, res) => {
  eventsController
    .deleteStudentFromEvent(req.params.eventId, req.params.studentId)
    .then((result) => {
      if (result === 0) {
        res.status(404).send('The student ID you provided does not exist.');

      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
