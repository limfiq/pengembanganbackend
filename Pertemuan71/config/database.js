const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('akademik_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
module.exports = sequelize;
