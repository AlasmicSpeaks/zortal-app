const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  passwordHash: String,
  aura: String,
  styleTags: [String],
  zorCoinBalance: { type: Number, default: 0 },
  guild: String,
  quests: [{ questId: Number, status: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
