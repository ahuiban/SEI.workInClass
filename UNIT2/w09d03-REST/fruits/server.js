const express = require("express");
const app = express();
const port = 3000;
const fruits = [
    {
        name: "apple",
        color: "red",
        readyToEat: true
    },
    {
        name: "banana",
        color: "yellow",
        readyToEat: true
    },
    {
        name: "pear",
        color: "green",
        readyToEat: false
    }
];
app.get("/fruits/:id", (req, res) => {
    res.send(fruits[req.params.id]);
});
app.get("/fruits", (req, res) => {
    res.send(fruits);
});
app.listen(port, () => {
    console.log("listening on port", port);
});