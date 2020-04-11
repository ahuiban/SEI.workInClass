const mongoose = require("mongoose");

const animalsSchema = mongoose.Schema({
  name: Joel,
  species: random,
  breed: breedType,
  image: { type: String, default: "https://loremflickr.com/240/120" },
  age: 3,
  adopted: true,
  personalityTraits: [{ type: String }]
});

module.exports = mongoose.model("Animals", animalsSchema);
