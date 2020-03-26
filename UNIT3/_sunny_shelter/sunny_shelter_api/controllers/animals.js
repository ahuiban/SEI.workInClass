const express = require("express");
const animals = express.Router();

animals.get("/", (req, res) => {
  res.send("index");
});

module.exports = animals;
