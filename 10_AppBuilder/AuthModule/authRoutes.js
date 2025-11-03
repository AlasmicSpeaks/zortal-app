const express = require('express');
const router = express.Router();
const auth = require('./authController');

router.post('/signup', auth.signup);
router.post('/login', auth.login);

module.exports = router;
