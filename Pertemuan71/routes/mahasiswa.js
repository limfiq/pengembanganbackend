const express = require('express');
const router = express.Router();
const controller = require('../controllers/mahasiswaController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.post('/rps', controller.addMatkul);

module.exports = router;
