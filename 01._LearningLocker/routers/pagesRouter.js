import { homepagePage, aboutme, contact, learninggoals } from "../util/readPages.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/aboutme", (req, res) => {
    res.send(aboutme);
});

router.get("/contact", (req, res) => {
    res.send(contact);
});

router.get("/learning", (req, res) => {
    res.send(learninggoals);
});


export default router;