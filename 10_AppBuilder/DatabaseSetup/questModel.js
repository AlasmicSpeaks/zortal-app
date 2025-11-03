const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  title: String,
  description: String,
  reward: String,
  tags: [String],
  season: String,
  assignedTo: [String],
  completedBy: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quest', questSchema);
