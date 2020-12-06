const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');

const TopicsRouter = require('./topics.router');

const skillsRouter = require('./skills.router');

const eventsRouter = require('./events.router');

const selfRouter = require('./self.router');

const groupsRouter = require('./groups.router');

const organizationsRouter = require('./organizations.router');

const slackRouter = require('./slack.router');

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

router.use('/events', eventsRouter);
router.use('/groups', groupsRouter);

router.use('/organizations', organizationsRouter);

router.use('/signin', slackRouter);

router.use('/self', selfRouter);

module.exports = router;
