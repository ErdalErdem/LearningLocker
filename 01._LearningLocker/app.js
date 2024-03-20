import express from 'express'


const app = express()
app.use(express.static("public"))
app.use(express.json())


import { readpage, renderPage } from "./util/templateEngine.js";

// Rendering pages

const homepage = readpage("./public/pages/homepage/homepage.html")
    // cssLinks: `<link rel="stylesheet" href="/public/assets/css/main.css">`
const homepagePage = renderPage(homepage)
    
const about = readpage("./public/pages/about/about.html")
const aboutPage = renderPage(about)

const contact = readpage("./public/pages/contact/contact.html")
const contactPage = renderPage(contact)

const theory = readpage("./public/pages/theory/theory.html")
const theoryPage = renderPage(theory)

const commands = readpage("./public/pages/commands/commands.html")
const commandsPage = renderPage(commands)

const toolsused = readpage("./public/pages/toolsused/toolsused.html")
const toolsusedPage = renderPage(toolsused)


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

app.get("/theory", (req, res) => {
    res.send(theoryPage)
})

app.get("/commands", (req, res) => {
    res.send(commandsPage)
})

app.get("/toolsused", (req, res) => {
    res.send(toolsusedPage)
})

// Running on port 8080

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
