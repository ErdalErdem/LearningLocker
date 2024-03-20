import express from 'express'


const app = express()
app.use(express.static("public"))
app.use(express.json())


import { readpage, renderPage } from "./util/templateEngine.js";

// rendering pages

const homepage = readpage("./public/pages/homepage/homepage.html")
const homepagePage = renderPage(homepage)
    
const about = readpage("./public/pages/about/about.html")
const aboutPage = renderPage(about)

const contact = readpage("./public/pages/contact/contact.html")
const contactPage = renderPage(contact)

const learninggoals = readpage("./public/pages/learninggoals/learninggoals.html")
const learninggoalsPage = renderPage(learninggoals)




/*

const loginPage = readpage("./public/pages/login/login.html", {
    cssLinks: `<link rel="stylesheet" href="./public/pages/login/login.css">`
})
const loginPagePage = renderPage(loginPage)

*/

//Mapping our endpoints 

app.get("/", (req, res) => {
    res.send(homepagePage)
})

app.get("/about", (req, res) => {
        res.send(aboutPage)
})

app.get("/contact", (req, res) => {
    res.send(contactPage)
})

app.get("/learninggoals", (req, res) => {
    res.send(learninggoalsPage)
})




// Running on port 8080

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
