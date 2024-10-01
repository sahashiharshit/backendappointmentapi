const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Users = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: { 
    type: Sequelize.STRING,
    allowNull:false
},
  phone: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
});
module.exports = Users;
