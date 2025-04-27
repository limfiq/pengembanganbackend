const express = require('express');
const router = express.Router();
const Mahasiswa = require('../models/mahasiswa');

// GET semua mahasiswa
router.get('/', async (req, res) => {
    const mahasiswa = await Mahasiswa.findAll();
    res.json(mahasiswa);
});

// GET mahasiswa by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const mahasiswa = await Mahasiswa.findByPk(id);
    if (mahasiswa) {
        res.json(mahasiswa);
    } else {
        res.status(404).json({ message: 'Mahasiswa not found' });
    }
});

// POST tambah mahasiswa
router.post('/', async (req, res) => {
    const { nama, nim, jurusan } = req.body;
    try {
        const newMahasiswa = await Mahasiswa.create({ nama, nim, jurusan });
        res.status(201).json(newMahasiswa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT update mahasiswa
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nama, nim, jurusan } = req.body;
    try {
        const update = await Mahasiswa.update(
            { nama, nim, jurusan },
            { where: { id } }
        );
        res.json({ message: 'Mahasiswa updated', update });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE mahasiswa
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Mahasiswa.destroy({ where: { id } });
        res.json({ message: 'Mahasiswa deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
