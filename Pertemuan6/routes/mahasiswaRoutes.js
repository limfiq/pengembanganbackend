const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

router.get('/', mahasiswaController.getMahasiswa);
router.get('/:id', mahasiswaController.getMahasiswaById);
router.post('/', mahasiswaController.createMahasiswa);
router.put('/:id', mahasiswaController.updateMahasiswa);
router.delete('/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;
