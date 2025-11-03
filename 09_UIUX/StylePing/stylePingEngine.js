const pings = [];

exports.sendPing = (fromUser, toUser, type) => {
  const ping = {
    fromUser,
    toUser,
    type, // e.g. "joy", "styleBoost", "resonance"
    timestamp: Date.now()
  };
  pings.push(ping);
  return ping;
};

exports.getRecentPings = (userId) => {
  return pings.filter(p => p.toUser === userId).slice(-10);
};
