const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('matakuliah', {
    nama_matkul: DataTypes.STRING,
    kode_matkul: DataTypes.STRING,
  });
};