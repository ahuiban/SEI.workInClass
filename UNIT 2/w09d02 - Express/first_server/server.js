const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("Hi from the back end");
});
app.listen(3000);