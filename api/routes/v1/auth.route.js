const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/auth.controller');

router
    .route('/slack')
    /**
     * @api {get} v1/auth/slack Slack Sign In
     * @apiDescription Sign in with slack. Creates a new user if it does not exist
     */
    .get(passport.authorize('slack'), controller.slack);

module.exports = router;
