const { response } = require("express");
const express = require("express");

const { saveAllProducts } = require("../utils/admin");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("admin/ working");
});
router.post("/", async (req, res) => {
  try {
    await saveAllProducts(req.body);
    res.status(201).json({ msg: `Added ${req.body.length} products` });
  } catch (error) {
    res.status(500).json({ msg: `${error}` });
  }
});

module.exports = router;

// const names = [{ name: "Bob" }, { name: "Fred" }];

// res.status(200).json(names.map((person) => person.name));

// Or, you know, even
// res.status(200).json(names);
