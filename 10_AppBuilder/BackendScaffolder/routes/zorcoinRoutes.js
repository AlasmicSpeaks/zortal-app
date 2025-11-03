const express = require('express');
const router = express.Router();

// Example route: get ZorCoin balance (placeholder)
router.get('/balance', (req, res) => {
  res.json({ balance: 1000, message: 'ZorCoin route is working!' });
});

module.exports = router;
