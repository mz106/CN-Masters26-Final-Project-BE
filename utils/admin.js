const req = require("express/lib/request");
const AdminProducts = require("../models/admin");

const addProducts = async (name, catagory, weight, size, price, url) => {
  const newProducts = await AdminProducts.build({
    name,
    catagory,
    weight,
    size,
    price,
    url,
  });

  await newProducts.save();
};

module.exports = {
  addProducts,
};
