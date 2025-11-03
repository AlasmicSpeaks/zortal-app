const express = require('express');
const router = express.Router();

// Example route: login (placeholder)
router.post('/login', (req, res) => {
  res.json({ message: 'Login route is working!' });
});

module.exports = router;
