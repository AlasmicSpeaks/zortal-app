const feedbackEntries = [];

exports.recordFeedback = (message, source) => {
  const entry = {
    message,
    source,
    timestamp: Date.now()
  };
  feedbackEntries.push(entry);
  return entry;
};

exports.getRecentFeedback = () => {
  return feedbackEntries.slice(-10);
};
