
// const { sequelize } = require('../config/db');
const Mahasiswa = require('../models/mahasiswa'); // Pastikan path sesuai struktur project Anda

// controller/mahasiswa.js

// Get all mahasiswa
exports.getAllMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll();
        res.json(mahasiswa);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get mahasiswa by id
exports.getMahasiswaById = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findByPk(req.params.id);
        if (!mahasiswa) {
            return res.status(404).json({ message: 'Mahasiswa not found' });
        }
        res.json(mahasiswa);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create new mahasiswa
exports.createMahasiswa = async (req, res) => {
    try {
        const { nim, nama, jurusan } = req.body;
        const mahasiswa = await Mahasiswa.create({ nim, nama, jurusan });
        res.status(201).json(mahasiswa);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update mahasiswa by id
exports.updateMahasiswa = async (req, res) => {
    try {
        const { nim, nama } = req.body;
        const mahasiswa = await Mahasiswa.findByPk(req.params.id);
        if (!mahasiswa) {
            return res.status(404).json({ message: 'Mahasiswa not found' });
        }
        mahasiswa.nim = nim;
        mahasiswa.nama = nama;
        await mahasiswa.save();
        res.json(mahasiswa);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete mahasiswa by id
exports.deleteMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findByPk(req.params.id);
        if (!mahasiswa) {
            return res.status(404).json({ message: 'Mahasiswa not found' });
        }
        await mahasiswa.destroy();
        res.json({ message: 'Mahasiswa deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};