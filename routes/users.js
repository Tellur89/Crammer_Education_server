const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.route("/").get(userController.index).post(userController.create);

router.route("/:id").get(userController.show).delete(userController.destroy);

module.exports = router;
