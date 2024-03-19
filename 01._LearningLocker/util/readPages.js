import { readPage, renderPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage);


const aboutme = readPage("./public/pages/aboutme/aboutme.html");
export const aboutMe = renderPage(aboutme, {
    tabTitle: "Learning Locker",
    CSSLinks: '<link rel="stylesheet" href="/pages/homepage/homepage.css"'
});

const contact = readPage("./public/pages/contact/contact.html");
export const contactMe = renderPage(contact, {
    tabTitle: "Learning Locker"
});

const learninggoals = readPage("./public/pages/learninggoals/learninggoals.html");
export const learningGoals = renderPage(learninggoals, {
    tabTitle: "Learning Locker",
    CSSLinks: ''
});