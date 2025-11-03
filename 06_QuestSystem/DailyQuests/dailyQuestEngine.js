const dailyQuests = [
  {
    id: 1,
    title: "Post a glyph with 'joy'",
    reward: "5 ZorCoin",
    tag: "joy",
    active: true
  },
  {
    id: 2,
    title: "Refer a friend",
    reward: "10 ZorCoin",
    tag: "referral",
    active: true
  },
  {
    id: 3,
    title: "Complete your Sorology profile",
    reward: "Aura Shift",
    tag: "sorology",
    active: true
  }
];

exports.getActiveQuests = () => {
  return dailyQuests.filter(q => q.active);
};

exports.completeQuest = (user, questId) => {
  const quest = dailyQuests.find(q => q.id === questId);
  if (!quest) return { error: "Quest not found" };

  // Simulate reward logic
  if (quest.reward.includes("ZorCoin")) {
    const amount = parseInt(quest.reward);
    user.zorCoinBalance += amount;
  } else if (quest.reward.includes("Aura")) {
    user.aura = "Radiant";
  }

  return {
    message: `Quest "${quest.title}" completed!`,
    reward: quest.reward,
    user
  };
};
