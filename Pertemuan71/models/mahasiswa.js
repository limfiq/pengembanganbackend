const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('mahasiswa', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nama: DataTypes.STRING,
    nim: DataTypes.STRING,
  });
};
