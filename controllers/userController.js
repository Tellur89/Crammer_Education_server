const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createToken = (_id) => jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: '6h' });

const loginUser = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.login(username, password);
		const token = createToken(user._id);
		res.status(200).json({ username, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const signupUser = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const user = await User.signup(username, email, password);
		const token = createToken(user._id);
		res.status(200).json({ username: user.username, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { loginUser, signupUser, createToken };
