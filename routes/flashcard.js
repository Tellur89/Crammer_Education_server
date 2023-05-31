const { Router } = require('express');
const cardController = require('../controllers/flashcardController');
const auth = require('../middleware/auth');

const router = Router();

router.use(auth);
router
  .route("/")
  .get(cardController.getFlashCards)
  .post(cardController.createFlashCard)
  .patch(cardController.updateFlashcard)
  .delete(cardController.deleteFlashcard);

module.exports = router;
