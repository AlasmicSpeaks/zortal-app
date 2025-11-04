import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfilePage.css'; // Optional styling

const ProfilePage = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userRes = await axios.get(`/api/users/${userId}`);
        const postRes = await axios.get(`/api/posts/user/${userId}`);
        const friendRes = await axios.get(`/api/friends/get-friends/${userId}`);

        setUser(userRes.data);
        setPosts(postRes.data);
        setFriends(friendRes.data.friends);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
  }, [userId]);

  if (!user) return <div>Loading profile...</div>;

  return (
    <div className="profile-container">
      <h2>{user.username}'s Profile</h2>
      <p><strong>Aura:</strong> {user.aura}</p>
      <p><strong>ZorCoins:</strong> {user.coins}</p>

      <h3>Posts</h3>
      {posts.map(post => (
        <div key={post._id} className="profile-post">
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="Post" />}
        </div>
      ))}

      <h3>Friends</h3>
      <ul>
        {friends.map(friend => (
          <li key={friend._id}>{friend.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
