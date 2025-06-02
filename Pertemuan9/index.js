
const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { sequelize } = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use('/api/auth', authRoutes);
sequelize.sync().then(() => console.log("Database synced"));
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
