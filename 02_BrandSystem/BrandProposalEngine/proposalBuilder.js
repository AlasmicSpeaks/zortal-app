exports.generateProposal = (brand) => {
  return `
    Welcome ${brand.name},
    Based on your style tags (${brand.styleTags.join(", ")}), we propose a ZorTal onboarding ritual.
    Your mission aligns with ${brand.resonanceGoals.length} glyphwalker clusters.
  `;
};
