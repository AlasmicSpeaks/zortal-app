const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  aura:     { type: String, enum: ['Radiant', 'Dreamy', 'Bold', 'Warm', 'Mystic'], default: 'Radiant' },
  zorPoints: { type: Number, default: 0 },
  zorCoin:   { type: Number, default: 0 },
  questsCompleted: { type: Number, default: 0 },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  guild:   { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
