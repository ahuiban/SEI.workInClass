const express = require("express");
const app = express();
const PORT = 3003;
const mongoose = require("mongoose");

const animalsController = require("./controllers/animals");
app.use("/animals", animalsController);

///////////////
// Database Error / Disconnection
// Error / Disconnection
mongoose.connection.on("error", err =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//...farther down the page

mongoose.connect("mongodb://localhost:27017/animals", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

/////////////////

app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
