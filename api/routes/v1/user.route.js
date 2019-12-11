const express = require('express');
const router = express.Router();
const controller = require('../../controllers/user.controller');

router
    .route('/test')
    /**
     * @api {get} v1/user/test User Test
     */
    .get(controller.test);

module.exports = router;
