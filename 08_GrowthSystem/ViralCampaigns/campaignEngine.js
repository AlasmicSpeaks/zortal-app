const campaigns = [];

exports.launchCampaign = (title, theme, reward) => {
  const campaign = {
    id: campaigns.length + 1,
    title,
    theme,
    reward,
    active: true
  };
  campaigns.push(campaign);
  return campaign;
};

exports.getActiveCampaigns = () => {
  return campaigns.filter(c => c.active);
};
