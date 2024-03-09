import express from "express";

const app = express();

app.use(express.static("public"));


import { homepagePage, matchesPage, contactPage } from "./util/readPages.js";

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));

// Refactoring SSR

app.get("/", (req, res) => {
    res.send(homepagePage);
});


// Old code

/*

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/pages/contact.html")
});

app.get("/aboutme", (req, res) => {
    res.sendFile(__dirname + "/public/pages/aboutme.html")
});

app.get("/learninggoals", (req, res) => {
    res.sendFile(__dirname + "/public/pages/learninggoals.html")
});

*/




app.listen(PORT, () => {console.log("Server is running on port:", PORT)});

module.exports = app;