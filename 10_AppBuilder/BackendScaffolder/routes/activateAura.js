const express = require('express');
const router = express.Router();
const auraLedger = require('../data/auraLedger');
const User = require('../../DatabaseSetup/models/User');

// POST /activate-aura
router.post('/activate-aura', async (req, res) => {
  const { userId, auraName } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const aura = auraLedger.find(a => a.name === auraName);
    if (!aura) return res.status(404).json({ error: 'Aura not found in ledger' });

    const ownedAura = user.auras.find(a => a.name === auraName);
    if (!ownedAura) return res.status(403).json({ error: 'User does not own this aura' });

    if (!aura.isTimeSensitive) {
      return res.status(400).json({ error: 'Aura is not time-sensitive and cannot be activated' });
    }

    const now = new Date();
    const expiresAt = new Date(now.getTime() + aura.durationMinutes * 60000);

    ownedAura.expiresAt = expiresAt;
    user.markModified('auras');

    await user.save();

    res.json({
      message: `${auraName} activated`,
      expiresAt,
      effectType: aura.effectType
    });
  } catch (err) {
    console.error('Error activating aura:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
