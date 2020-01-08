const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/slack.controller');

router
    .route('/oauth')
    /**
     * @api {get} v1/slack/oauth Slack oauth callback
     */
    .get(passport.authorize('slack'), controller.oauth);

module.exports = router;
