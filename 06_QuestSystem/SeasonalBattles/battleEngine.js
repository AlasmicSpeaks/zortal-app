const battles = [];

exports.createBattle = (season, guilds, theme) => {
  const battle = {
    id: battles.length + 1,
    season,
    guilds,
    theme,
    scores: guilds.map(g => ({ guild: g, score: 0 })),
    active: true
  };
  battles.push(battle);
  return battle;
};

exports.recordVictory = (battleId, guildName, points) => {
  const battle = battles.find(b => b.id === battleId);
  if (!battle) return { error: "Battle not found" };

  const guildScore = battle.scores.find(s => s.guild === guildName);
  if (guildScore) guildScore.score += points;

  return battle;
};

exports.getLeaderboard = (battleId) => {
  const battle = battles.find(b => b.id === battleId);
  if (!battle) return { error: "Battle not found" };

  return battle.scores.sort((a, b) => b.score - a.score);
};
