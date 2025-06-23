const express = require('express');
const router = express.Router();
const { Matakuliah } = require('../models');

router.get('/', async (req, res) => {
  const data = await Matakuliah.findAll();
  res.json(data);
});

router.post('/', async (req, res) => {
  const mk = await Matakuliah.create(req.body);
  res.json(mk);
});
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const [updated] = await Matakuliah.update(req.body, { where: { id } });
  if (updated) {
    const updatedMk = await Matakuliah.findByPk(id);
    res.json(updatedMk);
  } else {
    res.status(404).json({ error: 'Matakuliah not found' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await Matakuliah.destroy({ where: { id } });
  if (deleted) {
    res.json({ message: 'Matakuliah deleted' });
  } else {
    res.status(404).json({ error: 'Matakuliah not found' });
  }
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const mk = await Matakuliah.findByPk(id);
  if (!mk) {
    return res.status(404).json({ message: 'Matakuliah not found' });
  }
  res.json(mk);
});

module.exports = router;