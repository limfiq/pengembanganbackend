
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('akademik', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
