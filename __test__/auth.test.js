const jwt = require("jsonwebtoken");
const request = require("supertest");
const User = require("../models/User");
const app = require("../app");

describe("Auth Middleware", () => {
  let user;
  let token;

  beforeEach(async () => {
    user = await User.signup("testUser", "test@user.com", "Password123!");
    token = jwt.sign(req.headers.split(" ")[1], "aisujhdiausfhiausfh");
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  xit("should return 401 if no authorization header is provided", async () => {
    const response = await request.get("/flashcards");

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("You are not authorised");
  });

  // it('should return 401 if authorization is unsuccessful', async () => {
  // 	const invalidToken = 'invalid-token';
  // 	const response = await request.get('/protected-route').set('Authorization', `Bearer ${invalidToken}`);

  // 	expect(response.status).toBe(401);
  // 	expect(response.body.error).toBe('authorisation unsuccessful');
  // });

  // it('should add the user to the request object if authorization is successful', async () => {
  // 	const response = await request.get('/protected-route').set('Authorization', `Bearer ${token}`);

  // 	expect(response.status).toBe(200);
  // 	expect(response.body.user._id).toBe(user._id.toString());
  // });
});
