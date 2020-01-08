const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const strategies = require('./passport');
const routes = require('../api/routes/v1');
const error = require('../api/middlewares/error');
const Rollbar = require('rollbar');
const { logs, rollbarEnvironment, rollbarAccessToken } = require('./vars');

/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable authentication
app.use(passport.initialize());
passport.use('slack', strategies.slack);

// API v1 routes
app.use('/v1', routes);

// rollbar error handler to send exceptions to your rollbar account
const rollbar = new Rollbar({
    environment: rollbarEnvironment,
    accessToken: rollbarAccessToken,
});
app.use(rollbar.errorHandler());

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
