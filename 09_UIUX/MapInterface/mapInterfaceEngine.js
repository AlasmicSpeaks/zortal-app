const mapData = {
  zones: [
    { name: "Radiant Ridge", aura: "Radiant", quests: 5 },
    { name: "Dreamy Dunes", aura: "Dreamy", quests: 3 },
    { name: "Mystic Marsh", aura: "Mystic", quests: 4 },
    { name: "Bold Bastion", aura: "Bold", quests: 2 },
    { name: "Warm Woods", aura: "Warm", quests: 6 }
  ]
};

exports.getZones = () => mapData.zones;

exports.getZoneByAura = (aura) => {
  return mapData.zones.find(z => z.aura === aura);
};
