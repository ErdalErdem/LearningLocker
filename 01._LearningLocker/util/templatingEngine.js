import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(page, config={}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    return header.replace("$TAB_TITLE$", config.tabTitle || "Learning Locker")
                .replace("$CSS_LINKS$", config.CSSLinks || "")
     + page 
     + footer;
}

const pageURI = "./public/pages/"; 
const pageCSS = `<link rel="stylesheet" href="/pages/`;
const pageJS = `<script src="/pages/`;
const pageJSEnd = `.js"></script>`

const aboutmeRender = renderPage( pageURI + "/aboutme/aboutme.html",  { tabTitle: "Learning Locker", cssLink: pageCSS + `aboutme/aboutme.css">`, } );
