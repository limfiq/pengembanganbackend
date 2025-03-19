const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const userRoutes = require('./routes/userRoutes');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
const port = 3000;

// Middleware Bawaan
app.use(express.json()); // Parsing JSON
app.use(express.urlencoded({ extended: true })); // Parsing Form Data

// Middleware Third-Party
app.use(cors()); // Mengizinkan akses API lintas domain
app.use(morgan('dev')); // Logging request
app.use(helmet()); // Keamanan tambahan

// Middleware Kustom (Logging)
app.use(loggerMiddleware);

// Gunakan Routes
app.use('/api/users', userRoutes);

// Middleware Error Handling
app.use(errorMiddleware);

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

//==============================================
// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json()); // Middleware untuk parsing JSON

// let users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
// ];

// // Mendapatkan semua user
// app.get('/api/users', (req, res) => {
//     res.json(users);
// });

// // Mendapatkan user berdasarkan ID
// app.get('/api/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json(user);
// });

// // Menambahkan user baru
// app.post('/api/users', (req, res) => {
//     const newUser = { id: users.length + 1, name: req.body.name };
//     users.push(newUser);
//     res.status(201).json(newUser);
// });

// // Mengupdate user
// app.put('/api/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) return res.status(404).json({ message: "User not found" });

//     user.name = req.body.name;
//     res.json(user);
// });

// // Menghapus user
// app.delete('/api/users/:id', (req, res) => {
//     users = users.filter(u => u.id !== parseInt(req.params.id));
//     res.json({ message: "User deleted" });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
