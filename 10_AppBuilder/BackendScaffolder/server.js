const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// 🔌 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('🧬 Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// 🔁 Route Imports
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const zorcoinRoutes = require('./routes/zorcoinRoutes');
const postRoutes = require('./routes/postRoutes');
const activateAuraRoute = require('./routes/activateAura');

// 🔀 Route Wiring
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/zorcoin', zorcoinRoutes);
app.use('/api/posts', postRoutes);
app.use('/api', activateAuraRoute); // ✅ Aura activation route

// 🚀 Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 ZorTal server running on port ${PORT}`);
});
