const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../DatabaseSetup/userModel');

const SECRET = 'zorTalSecretKey';

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({ username, email, passwordHash });
  await user.save();
  res.json({ message: 'Signup successful', userId: user._id });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(401).json({ error: 'Invalid password' });

  const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: '2h' });
  res.json({ message: 'Login successful', token });
};
