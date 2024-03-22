import { readpage, renderPage } from "../util/templateEngine.js";

// ------------------------ Render and Reading pages ------------------------------

const homepage = readpage("./public/pages/homepage/homepage.html")
export const homepagePage = renderPage(homepage)

const contact = readpage("./public/pages/contact/contact.html")
export const contactPage = renderPage(contact)

const theory = readpage("./public/pages/theory/theory.html")
export const theoryPage = renderPage(theory)

const commands = readpage("./public/pages/commands/commands.html")
export const commandsPage = renderPage(commands)

const toolsused = readpage("./public/pages/toolsused/toolsused.html")
export const toolsusedPage = renderPage(toolsused)

const dateobj  = readpage("./public/pages/dateobj/dateobj.html")
export const dateobjPage = renderPage(dateobj)

const fetch = readpage("./public/pages/fetch/fetch.html")
export const fetchPage = renderPage(fetch)

const readAndRender = readpage("./public/pages/readandrender/readandrender.html")
export const readAndRenderPage = renderPage(readAndRender)

const rest = readpage("./public/pages/rest/rest.html")
export const restPage = renderPage(rest)

const webadress = readpage("./public/pages/webadress/webadress.html")
export const webadressPage = renderPage(webadress)

const nodemon = readpage("./public/pages/nodemon/nodemon.html")
export const nodemonPage = renderPage(nodemon)

const git = readpage("./public/pages/git/git.html")
export const gitPage = renderPage(git)

const packagejson = readpage("./public/pages/packagejson/packagejson.html")
export const packagejsonPage = renderPage(packagejson)


