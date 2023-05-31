const request = require("supertest");
const app = require("../app");
const userSchema = require("../models/User");
const jwt = require("jsonwebtoken");

describe("api server", () => {
  let api;
  let secretKey = "randomSecretKey";
  let mockData = {
    username: "ajaya",
    password: "helloWorld123!",
  };

  beforeEach(async () => {
    // await userSchema.deleteMany();
    // jwt = await (
    //   await request(app).post("/users/signup").send(userInput)
    // ).body.data;
    let getToken = await request(app)
      .post("/users/login")
      .send(mockData)
      .set("Accept", "application/json");

    let token = getToken.headers.authorization;
    // token = token.split(" ")[1];
    console.log(getToken);
  });
  beforeAll(() => {
    api = app.listen(3000, () => {
      console.log("Test server running on port 3000");
    });

    // token = "Bearer " + token;
  });

  afterAll((done) => {
    console.log("Stopping the test server");
    api.close(done);
  });

  test("getting a request of 200 that shows all the flashcards", async () => {
    let token = jwt.sign(mockData.username, secretKey);
    await request(app)
      .get("/flashcards")
      .set("Authorization", "Bearer " + token)
      .expect(200);
  });
});

// function creatLoginToken(server, loginDetails, done) {
//   request(app)
//     .post("/login")
//     .send(loginDetails)
//     .end(function (error, response) {
//       if (error) {
//         throw error;
//       }
//       let loginToken = response.body.token;
//       done(loginToken);
//     });
// }
