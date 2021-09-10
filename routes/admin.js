
const express = require("express");
const cors = require("cors");

const { saveAllProducts, deleteAllProducts, findAllProducts } = require("../utils/admin");
const router = express.Router();

router.post("/getproducts", async (req, res) => {
  try { 
    const products = await findAllProducts();
    res.status(201).json({msg: await products.map(product => `${product.name}, ${product.url}`)});
  } catch (error) {
    res.status(500).json({msg: `${error}`});
  }
});

//post route to get
router.post("/", async (req, res) => {
  try {
    await saveAllProducts(req.body);
    res.status(201).json({ msg: `Added ${req.body.length} products` });
  } catch (error) {
    res.status(500).json({ msg: `${error}` });
  }
});
router.delete("/", async (req, res) => {
  try {
    const results = await deleteAllProducts();
    res.status(200).json({ msg: `deleted ${results} products` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "products do not exist", error });
  }
});
module.exports = router;

// const names = [{ name: "Bob" }, { name: "Fred" }];

// res.status(200).json(names.map((person) => person.name));

// Or, you know, even
// res.status(200).json(names);
