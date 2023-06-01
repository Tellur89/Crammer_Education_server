const FlashCards = require('../models/Flashcard');
const mongoose = require('mongoose');

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
	//should find all the flashcard for the user
	const username = req.headers.username;
	// console.log(req.headers.username);
	const flashcards = await FlashCards.find({ username: username }).sort({
		createdAt: -1,
	});
	// console.log(req.headers.authorization);
	//display status then flashcards
	res.status(200).json(flashcards);
};

// Update single flashcard of the user

const updateFlashcard = async (req, res) => {
	//   const user_id = req.params._id;

	// const { id } = req.params;

	// FIND FLASHCARD BY ID

	const { _id, frontSide, backSide, category } = req.body;
	console.log(_id);
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

// Delete single flashcard of the user
// should delete the flashcard using its name not user id
const deleteFlashcard = async (req, res) => {
	// get frontSide from req.body
	const id = req.params.id;

	//   const { user_id } = req.params; //{ id }

	// check if id exists
	//   if (!mongoose.Types.ObjectId.isValid(user_id)) {
	//     return res.status(404).json({ error: "id does not exists" });
	//   }
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

// TODO: find cards by category

module.exports = {
	createFlashCard,
	getFlashCards,
	updateFlashcard,
	deleteFlashcard,
};
