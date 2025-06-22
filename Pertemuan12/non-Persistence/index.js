const express = require('express');
const { sequelize } = require('./config/db');
const routes = require('./routes/AllRoutes')// Pastikan path sesuai struktur project Anda

const app = express();
app.use(express.json());
app.use('/api', routes); // Prefix route untuk semua endpoint
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});