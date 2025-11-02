exports.generateSorology = (user) => {
  const profile = {
    aura: user.aura,
    glyphScore: user.glyphScore,
    resonanceTier: user.glyphScore > 100 ? "Mythic" : "Emergent"
  };
  return profile;
};
