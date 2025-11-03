const activeQuests = {};
const completedQuests = {};

exports.assignQuestToUser = (userId, quest) => {
  if (!activeQuests[userId]) activeQuests[userId] = [];
  activeQuests[userId].push({ ...quest, status: "in-progress" });
  return activeQuests[userId];
};

exports.markQuestComplete = (userId, questId) => {
  const userQuests = activeQuests[userId] || [];
  const quest = userQuests.find(q => q.id === questId);
  if (!quest) return { error: "Quest not found" };

  quest.status = "completed";
  if (!completedQuests[userId]) completedQuests[userId] = [];
  completedQuests[userId].push(quest);

  // Remove from active
  activeQuests[userId] = userQuests.filter(q => q.id !== questId);

  return { message: "Quest completed", quest };
};

exports.getUserQuestStatus = (userId) => {
  return {
    active: activeQuests[userId] || [],
    completed: completedQuests[userId] || []
  };
};
