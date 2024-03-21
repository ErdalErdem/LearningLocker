import express from 'express'


const app = express()
app.use(express.static("public"))
app.use(express.json())


import { readpage, renderPage } from "./util/templateEngine.js";

// ------------------------ Render and Reading pages ------------------------------

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


const dateobj  = readpage("./public/pages/dateobj/dateobj.html")
const dateobjPage = renderPage(dateobj)

const fetch = readpage("./public/pages/fetch/fetch.html")
const fetchPage = renderPage(fetch)

const readAndRender = readpage("./public/pages/readandrender/readandrender.html")
const readAndRenderPage = renderPage(readAndRender)

const rest = readpage("./public/pages/rest/rest.html")
const restPage = renderPage(rest)

const webadress = readpage("./public/pages/toolsused/toolsused.html")
const webadressPage = renderPage(webadress)

const nodemon = readpage("./public/pages/nodemon/nodemon.html")
const nodemonPage = renderPage(nodemon)

const git = readpage("./public/pages/git/git.html")
const gitPage = renderPage(git)



// ------------------------ Mapping our endpoints ------------------------------

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

app.get("/dateobj", (req, res) => {
    res.send(dateobjPage)
})

app.get("/fetch", (req, res) => {
    res.send(fetchPage)
})

app.get("/readAndRender", (req, res) => {
    res.send(readAndRenderPage)
})

app.get("/rest", (req, res) => {
    res.send(restPage)
})

app.get("/toolsused", (req, res) => {
    res.send(toolsusedPage)
})

app.get("/webadress", (req, res) => {
    res.send(webadressPage)
})

app.get("/nodemon", (req, res) => {
    res.send(nodemonPage)
})

app.get("/git", (req, res) => {
    res.send(gitPage)
})

// ------------------------ Running on port 8080 ------------------------------

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
