const auraLedger = [
  {
    name: 'Mystic',
    description: 'Intuitive and ethereal. Unlocks insight quests.',
    cost: 100,
    rarity: 'Common',
    ability: '2x XP on Insight quests',
    image: '/images/auras/mystic.png',
    isTimeSensitive: true,
    durationMinutes: 30,
    effectType: 'xpBoost',
    expiresAt: null
  },
  {
    name: 'Flare',
    description: 'Bold and creative. Boosts creator referrals.',
    cost: 150,
    rarity: 'Uncommon',
    ability: '+10 ZorPoints per creator referral',
    image: '/images/auras/flare.png',
    isTimeSensitive: true,
    durationMinutes: 60,
    effectType: 'referralBoost',
    expiresAt: null
  },
  {
    name: 'Echo',
    description: 'Reflective and resonant. Enhances branded quest matching.',
    cost: 200,
    rarity: 'Rare',
    ability: 'Access to exclusive branded quests',
    image: '/images/auras/echo.png',
    isTimeSensitive: false,
    effectType: 'questUnlock',
    expiresAt: null
  }
];

module.exports = auraLedger;
