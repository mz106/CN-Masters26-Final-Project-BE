const { response } = require("express");
const express = require("express");

const { addProducts } = require("../utils/admin");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("admin/ working");
});
router.post("/", async (req, res) => {
  try {
    await addProducts(
      req.body.name,
      req.body.catagory,
      req.body.weight,
      req.body.size,
      req.body.price,
      req.body.url
    );
    res
      .status(201)
      .json({ msg: `data has been created in the products table: ${req.body.name}` });
  } catch (error) {
    res.status(500).json({ msg: `${error}` });
  }
});

module.exports = router;
