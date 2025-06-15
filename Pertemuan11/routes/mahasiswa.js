const express = require('express');
const router = express.Router();
const { Mahasiswa, Matakuliah } = require('../models');

router.get('/', async (req, res) => {
  const data = await Mahasiswa.findAll({ include: Matakuliah });
  res.json(data);
});
router.get('/:id', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByPk(req.params.id, { include: Matakuliah });
  if (!mahasiswa) {
    return res.status(404).json({ message: 'Mahasiswa not found' });
  }
  res.json(mahasiswa);
});

router.post('/', async (req, res) => {
  const mhs = await Mahasiswa.create(req.body);
  res.json(mhs);
});


router.put('/:id', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByPk(req.params.id);
  if (!mahasiswa) {
    return res.status(404).json({ message: 'Mahasiswa not found' });
  }
  await mahasiswa.update(req.body);
  res.json(mahasiswa);
});

router.delete('/:id', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByPk(req.params.id);
  if (!mahasiswa) {
    return res.status(404).json({ message: 'Mahasiswa not found' });
  }
  await mahasiswa.destroy();
  res.json({ message: 'Mahasiswa deleted' });
});

router.post('/:id/matakuliah', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByPk(req.params.id);
  await mahasiswa.addMatakuliah(req.body.matakuliahId);
  res.json({ message: 'Added to RPS' });
});
router.put('/:id/matakuliah/:matakuliahId', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByPk(req.params.id);
  const matakuliah = await Matakuliah.findByPk(req.params.matakuliahId);
  if (!mahasiswa || !matakuliah) {
    return res.status(404).json({ message: 'Mahasiswa or Matakuliah not found' });
  }
  await mahasiswa.setMatakuliah(matakuliah);
  res.json({ message: 'RPS updated' });
});
router.delete('/:id/matakuliah/:matakuliahId', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByPk(req.params.id);
  if (!mahasiswa) {
    return res.status(404).json({ message: 'Mahasiswa not found' });
  }
  await mahasiswa.removeMatakuliah(req.params.matakuliahId);
  res.json({ message: 'RPS deleted' });
});
module.exports = router;