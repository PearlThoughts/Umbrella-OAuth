const SlackStrategy = require('passport-slack').Strategy;
const { slackClientId, slackClientSecret } = require('./vars');

const slackStrategy = new SlackStrategy({
    clientID: slackClientId,
    clientSecret: slackClientSecret
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
});

exports.slack = slackStrategy;
