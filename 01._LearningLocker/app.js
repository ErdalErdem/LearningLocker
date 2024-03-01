const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/homepage.html")
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/pages/contact.html")
});

app.get("/aboutme", (req, res) => {
    res.sendFile(__dirname + "/public/pages/aboutme.html")
});

app.get("/learninggoals", (req, res) => {
    res.sendFile(__dirname + "/public/pages/learninggoals.html")
});




app.listen(PORT, () => {console.log("Server is running on port:", PORT)});

module.exports = app;