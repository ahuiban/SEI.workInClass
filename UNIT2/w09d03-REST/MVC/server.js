const express = require("express");
const app = express();
const port = 3000;


const fruits = require("./models/fruits.js");



app.get("/fruits/:id", (req, res) => {
  //res.send(fruits[req.params.id]);
  res.render("show.ejs", { fruit: fruits[req.params.id] });
});

app.get("/calc/:num1/:num2", (req, res) => {
  if (req.query.operation === "add") {
    var result = Number(req.params.num1) + Number(req.params.num2);
    res.send("result1");
  } else if (req.query.operation === "subtract") {
    var result = Number(req.params.num1) - Number(req.params.num2);
    res.send("result2");
  } else if (req.query.operation === "multiply") {
    var result = Number(req.params.num1) * Number(req.params.num2);
  } else if (req.query.operation === "divide") {
    var result = Number(req.params.num1) / Number(req.params.num2);
  }

  res.send(`the result is ${result}`);
});

app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
