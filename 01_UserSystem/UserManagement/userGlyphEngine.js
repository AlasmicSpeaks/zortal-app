exports.updateGlyphScore = (user, action) => {
  const multiplier = {
    "post": 1.2,
    "referral": 2.0,
    "aura-shift": 1.5
  };
  const score = multiplier[action] || 1;
  user.glyphScore += score;
  return user.glyphScore;
};
