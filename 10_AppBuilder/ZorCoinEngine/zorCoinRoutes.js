const express = require('express');
const router = express.Router();
const zorCoin = require('./zorCoinController');

router.post('/earn', zorCoin.earnZorCoin);
router.post('/spend', zorCoin.spendZorCoin);

module.exports = router;
