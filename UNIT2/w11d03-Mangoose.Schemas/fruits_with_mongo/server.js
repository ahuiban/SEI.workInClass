const express = require("express");
const app = express();
const methodOverride = require("method-override");

// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");

//allows server to review json data
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/fruitsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//const Fruit = require("./models/fruits.js");

const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);


// Web server:
app.listen(3000, () => {
  console.log("listening");
});
