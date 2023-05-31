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
      unique: false,
    },
    // username: {
    // 	type: String,
    // 	// required: true,
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Flashcard", flashcardSchema);
