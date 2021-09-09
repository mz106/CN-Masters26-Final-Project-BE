const { response } = require("express");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("products/ working");
});

router.post("/weights", (req, res) => {
  res.status(400).json({ msg: "Here" });
});

router.get("/weights", (req, res) => {
  res.status(200).send(`getting ${req.query.limit} weights`);
});

router.get("/calisthenics", (req, res) => {
  res.status(200).send("products/calisthenics working");
});

router.get("/accessories", (req, res) => {
  res.status(200).send("products/accessories working");
});

module.exports = router;
