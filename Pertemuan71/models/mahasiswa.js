<<<<<<< HEAD
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Mahasiswa = sequelize.define(
  "Mahasiswa",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nim: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    jurusan: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "mahasiswa",
    timestamps: false,
  }
);

module.exports = Mahasiswa;
=======
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('mahasiswa', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nama: DataTypes.STRING,
    nim: DataTypes.STRING,
  });
};
>>>>>>> bb84616a0770e5acd036db8b1cb7f2ab930d63bc
