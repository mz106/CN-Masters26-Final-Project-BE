const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const User = connection.define( "User", {
    User_id: {
        type: DataTypes.INTEGER,
         allowNull: false
      },
    name: {
      type: DataTypes.STRING,
       allowNull: false
    },
    email: {
      type: DataTypes.STRING,
       allowNull: false
    },
  },
  {
    indexes: [{ unique: true, fields: ["User_id"] }],
  }
);

const main = async() =>{
    try{
        await User.sync({alter: true});
    }catch(error){
        console.log(error);
    }
}

main();

module.exports = User;