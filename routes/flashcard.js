const { Router } = require('express');
const cardController = require('../controllers/flashcardController');

const router = Router();

router.route('/').get(cardController.getFlashCards).post(cardController.createFlashCard);

router.route('/:id').patch(cardController.updateFlashcard).delete(cardController.deleteFlashcard);

module.exports = router;
