
const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
    res.status(200).send("/user/login working");
});

router.get("/register", (req, res) => {
    res.status(200).send("/user/register working");
});

module.exports = router;