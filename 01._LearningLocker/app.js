import express from "express";

const app = express();

app.use(express.static("public"));

// Refactoring SSR And routes


import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));


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