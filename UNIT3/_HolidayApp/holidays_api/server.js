// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Dependency configurations
const app = express();
const PORT = 3003;

// middleware
app.use(express.json()); // use .json(), not .urlencoded()

// Database Error / Disconnection
mongoose.connection.on("error", err =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// Database connection
mongoose.connect("mongodb://localhost:27017/merncrud", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// Load CORS middleware
const whitelist = [
  "http://localhost:3000",
  "https://fathomless-sierra-68956.herokuapp.com"
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors(corsOptions)); // Note: all routes are now exposed. If you want to limit access for specific verbs like POST or DELETE you can look at the npm documentaion for cors (for example with OMDB - it's ok for anyone to see the movies, but you don't want just anyone adding a movie)

// Controllers/Routes - Mount the routes from holidays controller
const holidaysController = require("./controllers/holidays.js");
app.use("/holidays", holidaysController);

// Listen / Web SERVER
app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
