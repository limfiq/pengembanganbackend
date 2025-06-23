const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('matakuliah', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nama_matkul: DataTypes.STRING,
    kode_matkul: DataTypes.STRING,
  });
};
