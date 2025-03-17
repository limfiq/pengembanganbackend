const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Ini Halaman Get Users`);
});
router.post('/inputuser', (req, res) => {
    res.send(`Ini Halaman input Users`);
});
router.put('/edituser', (req, res) => {
    res.send(`Ini Halaman edit Users`);
});
router.delete('/deleteuser', (req, res) => {
    res.send(`Ini Halaman delete Users`);
});

module.exports = router;
