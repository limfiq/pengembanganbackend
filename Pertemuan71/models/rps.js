const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('rps', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    mahasiswa_id: DataTypes.INTEGER,
    matakuliah_id: DataTypes.INTEGER,
  });
};
