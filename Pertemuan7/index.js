const express = require('express');
const sequelize = require('./config/database');
const mahasiswaRouter = require('./controller/mahasiswa');


const app = express();
app.use(express.json());

app.use('/api/mahasiswa', mahasiswaRouter);

// Sync database and start server
sequelize.sync()
    .then(() => {
        console.log('Database connected and synchronized.');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
