require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamp: true }
);

userSchema.static.signup = async function (username, email, password) {
	if (!username || !email || password) {
		throw new Error('All fields must be filled');
	}

	if (!validator.isEmail(email)) {
		throw new Error('Email is not valid');
	}

	if (!validator.isStrongPassword(password)) {
		throw new Error('Password is not strong enough');
	}

	const existEmail = await this.findOne({ email });
	if (existEmail) {
		throw new Error('Email already in use');
	}

	const existUsername = await this.findOne({ username });
	if (existUsername) {
		throw new Error('Username already in use');
	}

	const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT_ROUNDS));
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ username, email, password: hash });
	return user;
};

userSchema.static.login = async function (username, password) {
	if (!username || !password) {
		throw new Error('All fields must be filled');
	}

	const user = await this.findOne({ username });
	if (!user) {
		throw new Error('Incorrect username');
	}

	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		throw new Error('Incorrect password');
	}

	return user;
};
