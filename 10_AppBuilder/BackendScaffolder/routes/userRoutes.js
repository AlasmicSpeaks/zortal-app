const express = require('express');
const router = express.Router();

// Example route: get all users (placeholder)
router.get('/', (req, res) => {
  res.json({ message: 'User route is working!' });
});

module.exports = router;
