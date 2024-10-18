const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publication_year: Number,
  genre: String,
});

module.exports = mongoose.model("books", bookSchema);
