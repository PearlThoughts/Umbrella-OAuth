const express = require('express');
const router = express.Router();
const userRoutes = require('./user.route');
const slackRoutes = require('./slack.route');

/**
 * User routes
 */
router.use('/user', userRoutes);

/**
 * Slack routes
 */
router.use('/slack', slackRoutes);

module.exports = router;
