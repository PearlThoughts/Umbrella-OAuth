const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  rollbarEnvironment: process.env.ROLLBAR_ENVIRONMENT,
  rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  slackClientId: process.env.SLACK_CLIENT_ID,
  slackClientSecret: process.env.SLACK_CLIENT_SECRET,
};
