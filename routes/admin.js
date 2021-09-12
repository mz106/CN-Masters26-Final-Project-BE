
const express = require("express");
const cors = require("cors");

const { saveAllProducts, deleteAllProducts, findAllProducts, findAllProductsTest } = require("../utils/admin");
const router = express.Router();


router.get("/", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = ( page - 1) * limit;
  const endIndex = page * limit;

  
  let results = {};

  try { 
    const products = await findAllProducts();
    return res.status(201).json(products.slice(startIndex, endIndex));
  } catch (error) {
    res.status(500).json({msg: `${error}`});
  }

});

router.get("/test/", async (req, res) => {
  const products = await findAllProducts();
  res.status(201).send(products);
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
