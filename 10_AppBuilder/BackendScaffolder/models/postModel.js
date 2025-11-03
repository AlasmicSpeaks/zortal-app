const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  aura: { type: String, enum: ['Radiant', 'Dreamy', 'Bold', 'Warm', 'Mystic'], default: 'Radiant' },
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  comments: [{ userId: String, text: String, createdAt: Date }]
});

module.exports = mongoose.model('Post', postSchema);
