const express = require('express');
const db = require('../config/db'); // Pastikan path sesuai struktur project Anda
const Jurusan = require('../models/jurusan');

// Get all jurusan - cache handled by middleware
exports.getAllJurusan = async (req, res) => {
    try {
        const jurusan = await Jurusan.findAll();
        res.json(jurusan);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Clear cache on data insert
exports.createJurusan = async (req, res) => {
    try {
        const { kode, nama_jurusan } = req.body;
        const jurusan = await Jurusan.create({ kode, nama_jurusan });

        // clear all caches on this route
        req.apicacheGroup = 'jurusan';
        res.status(201).json(jurusan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateJurusan = async (req, res) => {
    try {
        const { kode, nama_jurusan } = req.body;
        const jurusan = await Jurusan.findByPk(req.params.id);
        if (!jurusan) {
            return res.status(404).json({ error: 'Jurusan not found' });
        }
        jurusan.kode = kode;
        jurusan.nama_jurusan = nama_jurusan;
        await jurusan.save();

        req.apicacheGroup = 'jurusan';
        res.json(jurusan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteJurusan = async (req, res) => {
    try {
        const jurusan = await Jurusan.findByPk(req.params.id);
        if (!jurusan) {
            return res.status(404).json({ error: 'Jurusan not found' });
        }
        await jurusan.destroy();

        req.apicacheGroup = 'jurusan';
        res.json({ message: 'Jurusan deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
