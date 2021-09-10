const Product = require("../models/product");

const saveAllProducts = async (array) => await Product.bulkCreate(array);
const deleteAllProducts = async () => await Product.destroy({ where: {} });
const findAllProducts = async () => await Product.findAll({});

module.exports = {
  saveAllProducts,
  deleteAllProducts,
  findAllProducts
};
