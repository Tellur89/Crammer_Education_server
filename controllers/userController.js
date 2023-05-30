const User = require('../models/User');
// TODO: import token package

// TODO: create createToken fn using _id, JWT_SECRET and expiration

const loginUser = async (req, res) => {
	const { username, password } = req.body;

	// TODO: create token using user._id

	try {
		const user = await User.login(username, password);

		res.status(200).json({ username }); // TODO: send username and token to the client
	} catch (error) {
		res.status(400).json({ massage: error.message });
	}
};

const signupUser = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await User.signup(username, password);
		// TODO: create token using user._id
		res.status(200).json({ email }); // TODO: send the token to the client
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { loginUser, signupUser };
