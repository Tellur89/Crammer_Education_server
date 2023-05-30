const bcrypt = require('bcrypt');
const { mockRequest, mockResponse } = require('jest-express');
const User = require('../models/User');
const userController = require('../controllers/userController');
const { beforeEach, afterEach } = require('node:test');

jest.mock('../models/User', () => ({
	getAll: jest.fn(),
	getOneById: jest.fn(),
	createUser: jest.fn(),
	getOneByUsername: jest.fn(),
}));

jest.mock('bcrypt', () => ({
	genSalt: jest.fn(),
	hash: jest.fn(),
}));

describe('User Controller test', () => {
	let req, res;

	beforeEach(() => {
		req = mockRequest();
		res = mockResponse();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('index exists', () => {
		const index = userController.index(req, res);

		expect(index).toBeDefined();
	});

	// it('index should return all users', async () => {
	// 	const mockedUsers = [{ name: 'Tom' }];
	// 	User.getAll.mockResolvedValue(mockedUsers);

	// 	await userController.index(req, res);

	// 	expect(res.status).toHaveBeenCalledWith(200);
	// 	expect(res.json).toHaveBeenCalledWith({ users: mockedUsers });
	// });
});
