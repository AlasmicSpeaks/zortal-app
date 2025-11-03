const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: String,
  styleTags: [String],
  mission: String,
  pitchDeck: [String],
  sponsoredQuests: [Number],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Brand', brandSchema);
