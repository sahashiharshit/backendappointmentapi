const Sequelize = require('sequelize');

const sequelize = new Sequelize("bookingappointment", "harshit", "19962024", {
    dialect: "mysql",
    host: "localhost",
  });
  
  module.exports = sequelize;