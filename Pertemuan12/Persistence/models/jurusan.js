const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('jurusan', {
    nama_jurusan: DataTypes.STRING,
    kode: DataTypes.STRING,
  });
};