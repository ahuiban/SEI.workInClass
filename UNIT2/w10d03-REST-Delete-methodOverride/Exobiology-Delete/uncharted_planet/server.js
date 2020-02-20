const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const items = [{ name: "Xylox", description: "An astronaut" }];
// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));
// Load methodOverride middleware:
app.use(methodOverride("_method"));
// NEW
app.get("/items/new", (req, res) => {
    res.render("new.ejs");
});
// SHOW
app.get("/items/:id", (req, res) => {
    res.render("show.ejs", { item: items[req.params.id] });
});

//DELETE

app.delete("/itens/:id", (req, res) => {
    items.splice(req.params.id, 1); // remove the item from the a
    res.redirect("/items"); // redirect to the index page
})

// CREATE
app.post("/items/", (req, res) => {
    let index = items.push(req.body) - 1;
    res.redirect(`/items/${index}`);
});

//INDEX
app.get("/items/", (req, res) => {
    res.render("index.ejs", { items: items });

})



app.listen(port, () => {
    console.log("listening on port", port);
});





