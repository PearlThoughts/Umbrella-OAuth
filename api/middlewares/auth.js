const passport = require('passport');

exports.oAuth = service => passport.authenticate(service, { session: false });
