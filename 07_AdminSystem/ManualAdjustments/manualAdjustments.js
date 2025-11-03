exports.adjustUserBalance = (userId, amount) => {
  // Simulated logic
  return {
    userId,
    adjustment: amount,
    reason: "Manual override",
    timestamp: Date.now()
  };
};
