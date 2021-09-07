const {DataTypes} = require("sequelize");
const{connection} = require("../db");

const Products = connection.define("Products", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { indexes: [{ unique: true, fields: ["Product_id"] }],
  });

const main = async() => {
    try {
        await Products.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
}

main();

module.exports = Products;