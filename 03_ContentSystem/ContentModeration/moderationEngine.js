exports.flagContent = (post) => {
  const bannedWords = ["hate", "violence", "spam"];
  const flagged = bannedWords.some(word => post.content.includes(word));
  return flagged ? { ...post, flagged: true } : post;
};
