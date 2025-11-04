import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css'; // Optional styling

const CreatePost = ({ userId }) => {
  const [content, setContent] = useState('');
  const [auraTag, setAuraTag] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('content', content);
    formData.append('auraTag', auraTag);
    if (image) formData.append('image', image);

    try {
      await axios.post('/api/posts/create', formData);
      setContent('');
      setAuraTag('');
      setImage(null);
      alert('Post created!');
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        />
        <input
          type="text"
          value={auraTag}
          onChange={e => setAuraTag(e.target.value)}
          placeholder="Aura tag (e.g. JoyBurst)"
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
