// Dependencies
// =============================================================

var path = require("path");

// Sets up the Express App
// =============================================================

module.exports = function(app) {

// GET route that displays survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// GET route that displays homepage
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// default to home page
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

};