const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('../models/User');
const SALT = process.env.BCRYPT_SALT_ROUNDS;

const index = async (req, res) => {
	try {
		const users = await User.getAll();
		res.status(200).json({ users });
	} catch (error) {
		res.status(500).json({ error: error, massage: "Can't connect to server" });
	}
};

const show = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.getOneById(id);
	} catch (error) {
		res.status(404).json({ error: error, message: "Can't find the user by given ID" });
	}
};

const create = async (req, res) => {
	try {
		const data = req.body;
		const salt = await bcrypt.genSalt(parseInt(SALT));
		data['password'] = await bcrypt.hash(data['password'], salt);
		const user = await User.createUser(data);
		res.status(201).json({ message: 'User created successfully', user });
	} catch (error) {
		res.status(404);
	}
};

const destroy = async (req, res) => {
	try {
		const { username } = req.params;
		const user = await User.getOneByUsername(username);
		const res = await user.deleteUser();
		res.status(204).json({ message: 'User removed successfully', res });
	} catch (error) {
		res.status(404).json({
			message: 'Could not remove the user from database',
			error,
		});
	}
};

module.exports = { index, show, create, destroy };
