const jwt = require("jsonwebtoken");
const request = require("supertest");
const { ObjectId } = require("mongoose").Types;
const app = require("../app");
const userController = require("../controllers/userController");
const User = require("../models/User");

jest.mock("../models/User", () => ({
  signup: jest.fn(),
  login: jest.fn(),
}));

jest.mock("bcrypt", () => ({
  genSalt: jest.fn(),
  hash: jest.fn(),
}));

describe("User Controller test", () => {
  let api;
  beforeEach(() => {
    api = app.listen(9200, () => {
      // const port = api.address().port;
      console.log(`Test server running on port 9200`);
    });
  });

  afterEach((done) => {
    console.log("Stopping test server");
    api.close(done);
  });

  xit("createToken should generate a valid token with the given ID", () => {
    process.env.SECRET_KEY = "my-secret-key";

    jwt.sign = jest.fn();

    const _id = "12345";

    userController.createToken(_id);

    expect(jwt.sign).toHaveBeenCalledWith({ _id: "12345" }, "my-secret-key", {
      expiresIn: "1h",
    });
  });

  xit("respond to creating new user with status 200", async () => {
    const testData = {
      username: "user212222",
      email: "tom1232222@gmail.com",
      password: "Jkljkl123!",
    };

    const res = await request(api)
      .post("/users/signup")
      .send(testData)
      .set("Content-Type", "application/json")
      .expect(200);

    expect(res.body).toEqual({
      username: testData.username,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc3MzFmNTRkYzQ1MGVhZGEwNGVjMDUiLCJpYXQiOjE2ODU1MzMxNzMsImV4cCI6MTY4Nzzzzjc3M30.mevjPyaHlTo5UiKnaRiT5HNsC2GIxbdpWsTO-pJ1hE0",
    });
  });
});
