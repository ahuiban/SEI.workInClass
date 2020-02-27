/*
* Done with NEW


*/




const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));



app.get("/new", (req, res) => {
    res.render("new.ejs");
});

// Web server:
app.listen(3000, () => {
    console.log("listening");
});



