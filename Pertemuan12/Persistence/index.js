const express = require('express');
const redis = require('redis');
const { sequelize } = require('./config/db');
const routes = require('./routes/AllRoutes')// Pastikan path sesuai struktur project Anda

const app = express();
app.use(express.json());
app.use('/api', routes); // Prefix route untuk semua endpoint
const PORT = process.env.PORT || 3000;


// Tes koneksi Sequelize
sequelize.authenticate()
    .then(() => console.log('Database connected!'))
    .catch(err => console.error('Unable to connect to the database:', err));

// Inisialisasi Redis
const redisClient = redis.createClient();

redisClient.on('connect', () => {
    console.log('Connected to Redis!');
});
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
    console.error('Pastikan server Redis berjalan di localhost:6379');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});