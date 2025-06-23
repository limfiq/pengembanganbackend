const { DataTypes } = require('sequelize');
// Ensure this path is correct and that db.js exports a Sequelize instance
const sequelize = require('../config/db');

const Jurusan = sequelize.define('Jurusan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama_jurusan: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'jurusan',
  timestamps: false
});

module.exports = Jurusan;
