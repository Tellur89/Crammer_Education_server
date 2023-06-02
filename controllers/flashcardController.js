const FlashCards = require('../models/Flashcard');

//CRUD format

// Create new flashcard
const createFlashCard = async (req, res) => {
	const { frontSide, backSide, category } = req.body;

	try {
		const username = req.body.username;
		const flashcard = await FlashCards.create({
			frontSide,
			backSide,
			category,
			username,
		});

		res.status(200).json(flashcard);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Read all flashcards of the user
const getFlashCards = async (req, res) => {
	const username = req.headers.username;
	const flashcards = await FlashCards.find({ username: username }).sort({
		createdAt: -1,
	});
	res.status(200).json(flashcards);
};

// Update single flashcard of the user

const updateFlashcard = async (req, res) => {
	const { _id, frontSide, backSide, category } = req.body;

	try {
		const updateCard = await FlashCards.findOneAndUpdate(
			{ _id: _id },
			{
				frontSide,
				backSide,
				category,
			}
		);

		if (!updateCard) {
			res.status(404).json({ error: 'cant update flashcard' });
		}
		res.status(200).json({ update: 'This card was updated' });
	} catch (error) {
		return res.status(404).json({ error: 'couldnt update' });
	}
};

const deleteFlashcard = async (req, res) => {
	const id = req.params.id;
	try {
		const deleteCard = await FlashCards.findOneAndDelete({
			_id: id,
		});
		if (!deleteCard) {
			return res.status(404).json({ error: 'cant delete' });
		}
		res.status(200).json(deleteCard);
	} catch (error) {
		return res.status(404).json({ error: 'cant delete' });
	}
};

module.exports = {
	createFlashCard,
	getFlashCards,
	updateFlashcard,
	deleteFlashcard,
};
