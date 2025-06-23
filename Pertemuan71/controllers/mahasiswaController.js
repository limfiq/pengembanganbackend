const { Mahasiswa, Matakuliah } = require('../models');

exports.getAll = async (req, res) => {
  const data = await Mahasiswa.findAll({ include: Matakuliah });
  res.json(data);
};

exports.create = async (req, res) => {
  const { nama, nim } = req.body;
  const mahasiswa = await Mahasiswa.create({ nama, nim });
  res.json(mahasiswa);
};

exports.addMatkul = async (req, res) => {
  const { mahasiswaId, matkulId } = req.body;
  const mahasiswa = await Mahasiswa.findByPk(mahasiswaId);
  await mahasiswa.addMatakuliah(matkulId);
  res.json({ message: 'Matakuliah ditambahkan ke RPS mahasiswa' });
};
