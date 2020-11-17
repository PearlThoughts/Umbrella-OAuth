const express = require('express');
const router = express.Router();
const controller = require('../../controllers/auth.controller');

router
    .route('/token')
    /**
     * @api {get} v1/auth/token Auth Token
     */
    .get(controller.token);

module.exports = router;
