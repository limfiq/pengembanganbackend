const express = require('express');
const cors = require('cors');
require('dotenv').config();

const mahasiswaRoutes = require('./routes/mahasiswa');
const matakuliahRoutes = require('./routes/matakuliah');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/mahasiswa', mahasiswaRoutes);
app.use('/matakuliah', matakuliahRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
