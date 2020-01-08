const express = require('express');
const router = express.Router();
const oAuthLogin = require('../../middlewares/auth').oAuth;
const passport = require('passport');
const controller = require('../../controllers/user.controller');

router
    .route('/test')
    /**
     * @api {get} v1/user/test User Test
     */
    .get(controller.test);

router
    .route('/auth')
    /**
     * @api {get} v1/user/auth User Test
     */
    .get(passport.authenticate('slack', { session: false}), controller.auth);

module.exports = router;
