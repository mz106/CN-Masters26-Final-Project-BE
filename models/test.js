
const { DataTypes } = require("sequelize");

const { connection } = require("../db");

const Test = connection.define("test", {
    name: { type: DataTypes.STRING, allowNull: false }
}, {});

const main = async () => {
    try {
        await Test.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
};

main();

module.exports = Test;