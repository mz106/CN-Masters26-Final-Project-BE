
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("products/ working");
});

router.get("/weights", (req, res) => {
    res.status(200).send("products/weights working");
});

router.get("/calisthenics", (req, res) => {
    res.status(200).send("products/calisthenics working");
});

router .get("/accessories", (req, res) => {
    res.status(200).send("products/accessories working");
});

module.exports = router;

