const BearerStrategy = require('passport-http-bearer');
const SlackStrategy = require('passport-slack').Strategy;
const authProviders = require('../api/services/authProviders');
const { slackClientId, slackClientSecret } = require('./vars');

const oAuth = service => async (token, done) => {
    try {
        const userData = await authProviders[service](token);
        console.log(userData);
        return done(null, user);
    } catch (err) {
        return done(err);
    }
};
const slackStrategy = new SlackStrategy({
    clientID: slackClientId,
    clientSecret: slackClientSecret
  }, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, refreshToken, profile);
    done(null, profile);
  }
);

exports.slack = slackStrategy;
