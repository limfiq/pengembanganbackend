const express = require('express');
const app = express();
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

app.use(express.json()); // Middleware body parser
app.use('/api/mahasiswa', mahasiswaRoutes); // Prefix route

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
