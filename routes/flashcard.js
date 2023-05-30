const { Router } = require("express");
const cardController = require("../controllers/flashcardController");

const router = Router();

router
  .route("/:id")
  .get(cardController.getFlashCards)
  .post(cardController.createFlashCard);

router
  .route(":id/flashcard")
  .post(userController.updateFlashcard)
  .delete(userController.deleteFlashcard);

module.exports = router;
