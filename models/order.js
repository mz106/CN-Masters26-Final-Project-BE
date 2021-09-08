const {DataTypes} = require("sequelize");
const{connection} = require("../db");

const Orders = connection.define("orders", {
    OrderDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    OrderNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Product_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ProductName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    User_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, { indexes: [{ unique: true, fields: ["OrdersId"] }],
});

// Orders.hasOne(User_id, { foreignKey: 'userId' });
// User.belongsTo(Users);

// Orders.hasOne(Product_id, { foreignKey: 'ProductId' });
// User.belongsTo(Users);

const main = async() => {
    try {
        await Orders.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
}

main();

module.exports = Orders;