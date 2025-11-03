const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/zortal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('🧬 Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes (modular imports)
const userRoutes = require('../../01_UserSystem/UserManagement/userRoutes');
const brandRoutes = require('../../02_BrandSystem/BrandDashboard/brandRoutes');
const contentRoutes = require('../../03_ContentSystem/PostModeration/contentRoutes');
const questRoutes = require('../../06_QuestSystem/QuestManager/questRoutes');
const adminRoutes = require('../../07_AdminSystem/AdminControlPanel/adminRoutes');

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/admin', adminRoutes);

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 ZorTal server running on port ${PORT}`);
});
