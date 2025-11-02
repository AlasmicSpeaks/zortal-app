exports.calculateInfluence = (user) => {
  const base = user.glyphScore;
  const referrals = user.referrals.length;
  const influence = base + referrals * 3;
  return influence;
};
