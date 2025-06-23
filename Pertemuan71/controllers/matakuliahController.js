const { Matakuliah } = require('../models');

exports.getAll = async (req, res) => {
  const data = await Matakuliah.findAll();
  res.json(data);
};

exports.create = async (req, res) => {
  const { nama_matkul, kode_matkul } = req.body;
  const matkul = await Matakuliah.create({ nama_matkul, kode_matkul });
  res.json(matkul);
};
