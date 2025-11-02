const breakthroughs = [];

exports.logBreakthrough = (userId, description) => {
  const entry = {
    userId,
    description,
    timestamp: Date.now()
  };
  breakthroughs.push(entry);
  return entry;
};
