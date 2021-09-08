const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const AdminProducts = connection.define(
  "Products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

const main = async () => {
  try {
    await AdminProducts.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
};

main();

module.exports = AdminProducts;

// indexes: [{ unique: true, fields: ["ProductId"] }]