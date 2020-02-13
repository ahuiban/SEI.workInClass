const express = require("express");

const app = express();

app.get('/frasier', (req, res) => {
    response.send("Once in prep school, the Existentialist Club once named me Most Likely to Be");
});

app.get("/", (request, response) => {
    response.send("Hello, Atlanta. I'm listening.");
});



app.listen(3000);
