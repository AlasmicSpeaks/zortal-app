const posts = [];

exports.createPost = (userId, content, aura) => {
  const post = {
    userId,
    content,
    aura,
    timestamp: Date.now(),
    resonanceScore: 0
  };
  posts.push(post);
  return post;
};
