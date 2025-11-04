const express = require('express');
const router = express.Router();
const {
  addFriend,
  removeFriend,
  getFriends
} = require('../controllers/friendController');

// ➕ Add a friend
router.post('/add-friend', addFriend);

// ➖ Remove a friend
router.post('/remove-friend', removeFriend);

// 📜 Get friend list
router.get('/get-friends/:userId', getFriends);

module.exports = router;
