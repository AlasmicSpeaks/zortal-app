const Post = require('../models/Post');
const User = require('../models/User');

// 📝 Create a new post
const createPost = async (req, res) => {
  const { authorId, content, image, auraTag } = req.body;

  try {
    const newPost = new Post({
      author: authorId,
      content,
      image,
      auraTag
    });

    await newPost.save();
    res.status(201).json({ message: 'Post created', post: newPost });
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// 📜 Get all posts (feed)
const getFeed = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'username aura')
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    console.error('Error fetching feed:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ❤️ React to a post
const addReaction = async (req, res) => {
  const { postId } = req.params;
  const { userId, type } = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.reactions.push({ userId, type });
    await post.save();

    res.json({ message: 'Reaction added', post });
  } catch (err) {
    console.error('Error adding reaction:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// 💬 Comment on a post
const addComment = async (req, res) => {
  const { postId } = req.params;
  const { userId, text } = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.comments.push({ userId, text });
    await post.save();

    res.json({ message: 'Comment added', post });
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createPost,
  getFeed,
  addReaction,
  addComment
};
