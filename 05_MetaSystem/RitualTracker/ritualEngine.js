const rituals = [];

exports.trackRitual = (userId, ritualName, milestone) => {
  const entry = {
    userId,
    ritualName,
    milestone,
    timestamp: Date.now()
  };
  rituals.push(entry);
  return entry;
};
