exports.tagEmotion = (content) => {
  const keywords = {
    joy: ["happy", "excited", "grateful"],
    cozy: ["calm", "safe", "warm"],
    bold: ["strong", "fearless", "loud"]
  };

  for (const [emotion, words] of Object.entries(keywords)) {
    if (words.some(word => content.includes(word))) {
      return emotion;
    }
  }
  return "neutral";
};
