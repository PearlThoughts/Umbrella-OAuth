const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');

/**
 * Auth routes
 */
router.use('/auth', authRoutes);

/**
 * User routes
 */
router.use('/user', userRoutes);

module.exports = router;
