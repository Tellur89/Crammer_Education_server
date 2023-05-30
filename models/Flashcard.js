const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flashcardSchema = new Schema(
  {
    frontSide: {
      type: String,
      required: true,
    },
    backSide: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    // username: {
    // 	type: String,
    // 	// required: true,
    // },
  },
  { timestamp: true }
);
module.exports = mongoose.model("Flashcard", flashcardSchema);
