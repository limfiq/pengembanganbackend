
const express = require('express');
const { Sequelize } = require('sequelize');
const redis = require('redis');
const { sequelize } = require('../config/db');
const Jurusan = require('../models/jurusan');

// Redis client
const client = redis.createClient();
client.connect();

client.on('connect', () => console.log('Redis connected'));
client.on('error', err => console.error('Redis error', err));


// Endpoint with Redis cache
exports.getAllJurusan = async (req, res) => {
    try {
        const cacheData = await client.get('jurusan');
        if (cacheData) {
            return res.json(JSON.parse(cacheData));
        }

        const jurusan = await Jurusan.findAll();
        await client.setEx('jurusan', 3600, JSON.stringify(jurusan));
        res.json(jurusan);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Clear cache on data insert (example)
exports.createJurusan = async (req, res) => {
    try {
        const { kode, nama_jurusan } = req.body;
        const jurusan = await Jurusan.create({ kode, nama });
        await client.del('jurusan'); // clear cache
        res.status(201).json(jurusan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Clear cache on data update (example)
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
        await client.del('jurusan'); // clear cache
        res.json(jurusan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Clear cache on data delete (example)
exports.deleteJurusan = async (req, res) => {
    try {
        const jurusan = await Jurusan.findByPk(req.params.id);
        if (!jurusan) {
            return res.status(404).json({ error: 'Jurusan not found' });
        }
        await jurusan.destroy();
        await client.del('jurusan'); // clear cache
        res.json({ message: 'Jurusan deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 
