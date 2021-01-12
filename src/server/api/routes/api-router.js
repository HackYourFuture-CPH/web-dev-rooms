const express = require('express');

const router = express.Router();

// Router imports
const eventsRouter = require('./events.router');
const eventsUsersRouter = require('./eventsUsers.router');
const eventsUsersRouter2 = require('./events.users.router');
const feedbacksRouter = require('./feedbacks.router');
const groupsRouter = require('./groups.router');
const mentorRouter = require('./mentor.router');
const modulesRouter = require('./modules.router');
const organizationsRouter = require('./organizations.router');
const selfRouter = require('./self.router');
const skillsRouter = require('./skills.router');
const slackRouter = require('./slack.router');
const TopicsRouter = require('./topics.router');
const userRouter = require('./user.router');
const usersRouter = require('./users.router');
const profileRouter = require('./profile.router');

const eventsDetailRouter = require('./eventDetail.router');

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
router.use('/events_users', eventsUsersRouter2);
router.use('/events', eventsRouter);
router.use('/eventsUsers', eventsUsersRouter);
router.use('/feedbacks', feedbacksRouter);
router.use('/groups', groupsRouter);
router.use('/modules', modulesRouter);
router.use('/organizations', organizationsRouter);
router.use('/profile', profileRouter);
router.use('/self', selfRouter);

router.use('/events_users', eventsUsersRouter2);

router.use('/eventsDetail', eventsDetailRouter);

router.use('/signin', slackRouter);
router.use('/skills', skillsRouter);
router.use('/topics', TopicsRouter);
router.use('/user', userRouter);
router.use('/user/register/mentor', mentorRouter);
router.use('/users', usersRouter);

module.exports = router;
