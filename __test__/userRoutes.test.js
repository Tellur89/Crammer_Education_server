const request = require("supertest");
const express = require("express");
const { Router } = require("express");
const { loginUser, signupUser } = require("../controllers/userController");

const router = Router();

router.route("/login").post(loginUser);
// router.route('/signup').post(signupUser);

const app = express();
app.use(express.json());
app.use(router);

test("POST /login should return http status 200", async () => {
  const mockReq = {
    body: {
      username: "User",
      password: "Jkljkl123!",
    },
  };

  const res = await request(app)
    .post("/login")
    .set("Content-Type", "application/json")
    .send(mockReq.body);
  expect(res.status).toBe(200);
});
