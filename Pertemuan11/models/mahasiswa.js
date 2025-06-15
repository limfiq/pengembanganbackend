const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('mahasiswa', {
    nama: DataTypes.STRING,
    nim: DataTypes.STRING,
  });
};