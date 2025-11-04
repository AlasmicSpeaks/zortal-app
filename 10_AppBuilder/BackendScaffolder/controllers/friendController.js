const Friend = require('../models/Friend');
const User = require('../models/User');

// ➕ Add a friend
const addFriend = async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    let friendDoc = await Friend.findOne({ userId });
    if (!friendDoc) {
      friendDoc = new Friend({ userId, friends: [friendId] });
    } else {
      if (!friendDoc.friends.includes(friendId)) {
        friendDoc.friends.push(friendId);
      }
    }

    await friendDoc.save();
    res.json({ message: 'Friend added', friends: friendDoc.friends });
  } catch (err) {
    console.error('Error adding friend:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ➖ Remove a friend
const removeFriend = async (req, res) => {
  const { userId, friendId } = req.body;

  try {
    const friendDoc = await Friend.findOne({ userId });
    if (!friendDoc) return res.status(404).json({ error: 'Friend list not found' });

    friendDoc.friends = friendDoc.friends.filter(id => id.toString() !== friendId);
    await friendDoc.save();

    res.json({ message: 'Friend removed', friends: friendDoc.friends });
  } catch (err) {
    console.error('Error removing friend:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// 📜 Get friend list
const getFriends = async (req, res) => {
  const { userId } = req.params;

  try {
    const friendDoc = await Friend.findOne({ userId }).populate('friends', 'username aura');
    if (!friendDoc) return res.json({ friends: [] });

    res.json({ friends: friendDoc.friends });
  } catch (err) {
    console.error('Error fetching friends:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addFriend,
  removeFriend,
  getFriends
};
