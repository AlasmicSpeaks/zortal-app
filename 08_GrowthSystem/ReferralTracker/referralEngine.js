const referrals = [];

exports.trackReferral = (referrerId, newUserId) => {
  const entry = {
    referrerId,
    newUserId,
    timestamp: Date.now()
  };
  referrals.push(entry);
  return entry;
};

exports.getReferralCount = (referrerId) => {
  return referrals.filter(r => r.referrerId === referrerId).length;
};
