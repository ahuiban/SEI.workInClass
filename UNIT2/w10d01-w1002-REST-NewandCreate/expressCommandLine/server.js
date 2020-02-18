const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hi from the back end.");
});






app.listen(3000, () => {
    console.log('I am listening on port 3000');
});