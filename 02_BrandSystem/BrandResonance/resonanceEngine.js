exports.calculateResonance = (brand, user) => {
  const matchScore = brand.styleTags.filter(tag => user.aura.includes(tag)).length;
  return matchScore / brand.styleTags.length;
};
