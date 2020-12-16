const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');

const TopicsRouter = require('./topics.router');

const skillsRouter = require('./skills.router');

const eventsRouter = require('./events.router');

const groupsRouter = require('./groups.router');

<<<<<<< HEAD
const feedbacksRouter = require('./feedbacks.router');
=======
const slackRouter = require('./slack.router');
>>>>>>> a8dd68182b9443ca2b98c55342a38c494728029c

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./src/server/api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/modules', modulesRouter);

router.use('/topics', TopicsRouter);

router.use('/skills', skillsRouter);

router.use('/groups', groupsRouter);

router.use('/feedbacks', feedbacksRouter);

router.use('/events', eventsRouter);

router.use('/', function (req, res) {
  res.redirect(`${process.env.API_PATH}/documentation`);
});
router.use('/signin', slackRouter);

module.exports = router;
