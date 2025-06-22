const express = require('express');
const jurusanController = require('../controllers/jurusan');
const mahasiswaController = require('../controllers/mahasiswa');

const router = express.Router();

// Routing untuk jurusan
router.get('/jurusan', jurusanController.getAllJurusan);
router.post('/jurusan', jurusanController.createJurusan);
router.put('/jurusan/:id', jurusanController.updateJurusan);
router.delete('/jurusan/:id', jurusanController.deleteJurusan);
// Routing untuk mahasiswa
router.get('/mahasiswa', mahasiswaController.getAllMahasiswa);
router.get('/mahasiswa/:id', mahasiswaController.getMahasiswaById);
router.post('/mahasiswa', mahasiswaController.createMahasiswa);
router.put('/mahasiswa/:id', mahasiswaController.updateMahasiswa);
router.delete('/mahasiswa/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;