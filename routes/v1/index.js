const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');

/**
 * User routes
 */
router.use('/user', userRoutes);

/**
 * Auth routes
 */
router.use('/auth', authRoutes);

module.exports = router;
