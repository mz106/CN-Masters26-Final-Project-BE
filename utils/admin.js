const Product = require("../models/product");

const saveAllProducts = async (array) => await Product.bulkCreate(array);
const deleteAllProducts = async () => await Product.destroy({ where: {} });
const findAllProducts = async (limit = 6, offset = 0, where = {}) => await Product.findAndCountAll({limit, offset, where});

const findAllProductsTest = async () => await Product.findAll({where: {name: "Dumbell"}});



module.exports = {
  saveAllProducts,
  deleteAllProducts,
  findAllProducts,
  findAllProductsTest
};
