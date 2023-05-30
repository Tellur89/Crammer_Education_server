const mongoose = require("mongoose");

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
      unique: true,
    },
    user_id: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("Flashcard", flashcardSchema);
