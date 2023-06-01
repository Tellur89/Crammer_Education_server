// const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const User = require("../models/User");

let mongoServer;
let connection;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  connection = await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await connection.disconnect();
  await mongoServer.stop();
});

describe("User Model", () => {
  xit("should create a new user", async () => {
    const userData = {
      username: "John Doe",
      email: "john@example.com",
      password: "Jkljkl123!",
    };
    const user = await User.create(userData);

    expect(user.name).toBe(userData.name);
    expect(user.email).toBe(userData.email);
  });
});
