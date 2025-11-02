exports.mintZorCoin = (user, action) => {
  const rates = {
    "post": 5,
    "referral": 10,
    "aura-shift": 7
  };
  const amount = rates[action] || 1;
  user.zorCoinBalance += amount;
  return { minted: amount, newBalance: user.zorCoinBalance };
};
