const auth = require('../middleware/auth');

describe('Authorization', () => {
	describe();
});

// const jwt = require('jsonwebtoken');
// const request = require('supertest');
// const User = require('../models/User');
// const app = require('../app');

// describe('Auth Middleware', () => {
// 	let user;
// 	let token;

// 	beforeEach(async () => {
// 		user = await User.signup('testUser', 'test@user.com', 'Password123!');
// 		token = jwt.sign(req.headers.split(' ')[1], 'aisujhdiausfhiausfh');
// 	});

// 	afterEach(async () => {
// 		await User.deleteMany({});
// 	});

// 	it('should return 401 if no authorization header is provided', async () => {
// 		const response = await request.get('/flashcards');

// 		expect(response.status).toBe(401);
// 		expect(response.body.error).toBe('You are not authorised');
// 	});

// });
