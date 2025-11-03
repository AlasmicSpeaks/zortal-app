import React, { useEffect, useState } from 'react';

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Glyph Feed</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
          <strong>{post.aura}</strong>
          <p>{post.content}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
