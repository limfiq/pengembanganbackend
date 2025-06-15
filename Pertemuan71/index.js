const express = require('express');
const app = express();
const { sequelize } = require('./models');
const mahasiswaRoutes = require('./routes/mahasiswa');
const matakuliahRoutes = require('./routes/matakuliah');

app.use(express.json());
app.use('/mahasiswa', mahasiswaRoutes);
app.use('/matakuliah', matakuliahRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
