exports.generatePitchDeck = (brandName, styleTags, mission) => {
  return {
    title: `${brandName} — Style Resonance Deck`,
    slides: [
      `Mission: ${mission}`,
      `Style Tags: ${styleTags.join(", ")}`,
      `Emotional Impact: High`,
      `ZorTal Integration: Ready`
    ]
  };
};
