const express = require('express');
const router = express.Router();
const {
  createPost,
  getFeed,
  addReaction,
  addComment
} = require('../controllers/postController');

// 📝 Create a new post
router.post('/create-post', createPost);

// 📜 Get all posts (feed)
router.get('/feed', getFeed);

// ❤️ React to a post
router.post('/react/:postId', addReaction);

// 💬 Comment on a post
router.post('/comment/:postId', addComment);

module.exports = router;
