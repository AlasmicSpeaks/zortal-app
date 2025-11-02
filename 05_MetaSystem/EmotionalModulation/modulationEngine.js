exports.modulateEmotion = (input) => {
  const tones = {
    "energized": "bold",
    "grateful": "warm",
    "focused": "clear",
    "curious": "playful"
  };
  return tones[input] || "neutral";
};
