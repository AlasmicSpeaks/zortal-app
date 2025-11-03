const guilds = [];

exports.createGuild = (name, styleTags, auraAlignment) => {
  const guild = {
    id: guilds.length + 1,
    name,
    styleTags,
    auraAlignment,
    members: []
  };
  guilds.push(guild);
  return guild;
};

exports.joinGuild = (guildId, userId) => {
  const guild = guilds.find(g => g.id === guildId);
  if (!guild) return { error: "Guild not found" };
  guild.members.push(userId);
  return guild;
};

exports.getGuildsByAura = (aura) => {
  return guilds.filter(g => g.auraAlignment === aura);
};
