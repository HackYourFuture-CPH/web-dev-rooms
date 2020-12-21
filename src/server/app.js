require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const HttpError = require('./api/lib/utils/http-error');
const authMiddleware = require('./api/auth/authMiddleware');

const buildPath = path.join(__dirname, '../../dist');

const apiRouter = require('./api/routes/api-router');

require('./config/db');

const app = express();

app.use(express.static(buildPath));

app.locals.ENV = process.env.NODE_ENV;
app.locals.ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';

app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  }),
);
app.use(cookieParser());
app.use(cors());

app.use(authMiddleware);

app.use(process.env.API_PATH, apiRouter);

app.use((err, req, res) => {
  if (err instanceof HttpError) {
    res.status(err.httpStatus);
    if (err.body) {
      return res.json(err.body);
    }
    return res.send({ error: err.message });
  }
  req.status(500).send('Unknown error');
});

app.use('/api/', function (req, res) {
  res.status(404).send("Sorry can't find that!");
});

app.use('/api', function (req, res) {
  res.redirect(`${process.env.API_PATH}/documentation`);
});

app.use('*', (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
