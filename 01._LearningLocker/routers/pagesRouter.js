import {homepagePage, contactPage, theoryPage, commandsPage, dateobjPage, fetchPage, readAndRenderPage, restPage, toolsusedPage, webadressPage, nodemonPage, gitPage, packagejsonPage} from "../util/readPages.js";
import { Router } from "express";

const router = Router();

// ------------------------ Mapping our endpoints ------------------------------

router.get("/", (req, res) => {
    res.send(homepagePage)
})

router.get("/about", (req, res) => {
        res.send(aboutPage)
})

router.get("/contact", (req, res) => {
    res.send(contactPage)
})

router.get("/theory", (req, res) => {
    res.send(theoryPage)
})

router.get("/commands", (req, res) => {
    res.send(commandsPage)
})

router.get("/toolsused", (req, res) => {
    res.send(toolsusedPage)
})

router.get("/dateobj", (req, res) => {
    res.send(dateobjPage)
})

router.get("/fetch", (req, res) => {
    res.send(fetchPage)
})

router.get("/readAndRender", (req, res) => {
    res.send(readAndRenderPage)
})

router.get("/rest", (req, res) => {
    res.send(restPage)
})

router.get("/toolsused", (req, res) => {
    res.send(toolsusedPage)
})

router.get("/webadress", (req, res) => {
    res.send(webadressPage)
})

router.get("/nodemon", (req, res) => {
    res.send(nodemonPage)
})

router.get("/git", (req, res) => {
    res.send(gitPage)
})

router.get("/packagejson", (req, res) => {
    res.send(packagejsonPage)
})

export default router