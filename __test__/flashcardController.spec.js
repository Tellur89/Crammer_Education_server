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
  let token;

  beforeEach(() => {
    // await userSchema.deleteMany();
    // jwt = await (
    //   await request(app).post("/users/signup").send(userInput)
    // ).body.data;
    // let token = getToken.headers.authorization;
    // token = token.split(" ")[1];
    // console.log(getToken);
  });
  beforeAll(() => {
    api = app.listen(3000, () => {
      console.log("Test server running on port 3000");
    });

    const createLogin = request(app)
      .post("users/login")
      .send(mockData)
      .set("Accept", "application/json");
    console.log(createLogin.headers);
    // console.log("login");
    // token = "Bearer " + login;
  });

  afterAll((done) => {
    console.log("Stopping the test server");
    api.close(done);
  });

  test("getting a request of 200 that shows all the flashcards", (done) => {
    let token = jwt.sign(mockData.username, secretKey);
    // let getToken = request(app)
    //   .post("/users/login")
    //   .send(mockData)
    //   .set("Accept", "application/json");
    // console.log(token);
    const x = request(app)
      .get("/flashcards")
      .set("Authorization", "Bearer " + token)
      .expect(200, done);

    console.log("hi");
    // console.log(x);
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
