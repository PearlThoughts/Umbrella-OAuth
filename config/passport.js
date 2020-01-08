const JwtStrategy = require('passport-jwt').Strategy;
const SlackStrategy = require('passport-slack').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { jwtSecret, slackClientId, slackClientSecret } = require('./vars');
const User = require('../api/models/user');

const jwtOptions = {
    secretOrKey: jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
const jwt = async (payload, done) => {
    try {
        const user = await User.findById(payload.sub);
        if (user) return done(null, user);
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
};

const slackStrategy = new SlackStrategy({
    clientID: slackClientId,
    clientSecret: slackClientSecret
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
});

exports.jwt = new JwtStrategy(jwtOptions, jwt);
exports.slack = slackStrategy;
