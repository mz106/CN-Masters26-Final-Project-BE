const Product = require("../models/product");

const saveAllProducts = async (array) => await Product.bulkCreate(array);
const deleteAllProducts = async () => await Product.destroy({ where: {} });

module.exports = {
  saveAllProducts,
  deleteAllProducts,
};
