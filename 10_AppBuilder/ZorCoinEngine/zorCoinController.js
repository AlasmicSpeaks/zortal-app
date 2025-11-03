const User = require('../DatabaseSetup/userModel');

exports.earnZorCoin = async (req, res) => {
  const { userId, amount, reason } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.zorCoinBalance += amount;
  await user.save();

  res.json({ message: `Earned ${amount} ZorCoin for ${reason}`, balance: user.zorCoinBalance });
};

exports.spendZorCoin = async (req, res) => {
  const { userId, amount, item } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  if (user.zorCoinBalance < amount) {
    return res.status(400).json({ error: 'Insufficient ZorCoin' });
  }

  user.zorCoinBalance -= amount;
  await user.save();

  res.json({ message: `Spent ${amount} ZorCoin on ${item}`, balance: user.zorCoinBalance });
};
