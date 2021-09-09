const req = require("express/lib/request");
const Product = require("../models/product");

const saveAllProducts = async (array) => await Product.bulkCreate(array);

module.exports = {
  saveAllProducts,
};
