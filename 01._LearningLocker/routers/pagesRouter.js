import { homepagePage, aboutMe, contactMe, learningGoals } from "../util/readPages.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/aboutme", (req, res) => {
    res.send(aboutMe);
});

router.get("/contact", (req, res) => {
    res.send(contactMe);
});

router.get("/learning", (req, res) => {
    res.send(learningGoals);
});


export default router;