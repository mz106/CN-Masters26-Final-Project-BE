const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const AdminProducts = connection.define(
  "Products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catagory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sizes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
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
