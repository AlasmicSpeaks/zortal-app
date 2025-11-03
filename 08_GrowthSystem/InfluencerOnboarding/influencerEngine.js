const influencers = [];

exports.registerInfluencer = (name, platform, reach) => {
  const profile = {
    name,
    platform,
    reach,
    auraTier: reach > 10000 ? "Radiant" : "Emergent"
  };
  influencers.push(profile);
  return profile;
};
