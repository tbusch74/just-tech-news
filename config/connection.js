const Sequelize = require('sequelize');

require('dotenv').config();

const sequlize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequlize