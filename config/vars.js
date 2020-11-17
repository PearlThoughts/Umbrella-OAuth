const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  rollbarEnvironment: process.env.ROLLBAR_ENVIRONMENT,
  rollbarAccessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  umbrellaApiKey: process.env.UMBRELLA_API_KEY,
  umbrellaApiSecret: process.env.UMBRELLA_API_SECRET,
  umbrellaTokenUrl: process.env.UMBRELLA_TOKEN_URL,
};
