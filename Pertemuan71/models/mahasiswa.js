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
