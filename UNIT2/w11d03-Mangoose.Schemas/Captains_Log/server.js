/*
* Done with NEW / CREATE / DELETE


*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");


//NEW
app.get("/new", (req, res) => {
    res.render("new.ejs");
});

// CREATE
app.post("/logs/", (req, res) => {
    if (req.body.shipIsBroken === "on") {
        //if checked, req.body.shipIsBroken is set to 'on'
        req.body.shipIsBroken = true;
    } else {
        //if not checked, req.body.shipIsBroken is undefined
        req.body.shipIsBroken = false;
    }
    Logs.create(req.body, (error, result) => {
        // res.send(result);
        res.redirect("/logs");
    });
});



//DELETE
app.delete("/logs/:id", (req, res) => {
    //res.send("deleting...")
    Log.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/logs")
    })
});





// Web server:
app.listen(3000, () => {
    console.log("listening");
});



