const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/users.json');

// Fungsi untuk membaca data dari JSON
const readData = () => {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
};

// Fungsi untuk menulis data ke JSON
const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET: Ambil semua user
exports.getAllUsers = (req, res) => {
    const users = readData();
    res.json(users);
};

// GET: Ambil user berdasarkan ID
exports.getUserById = (req, res) => {
    const users = readData();
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
};

// POST: Tambah user baru
exports.createUser = (req, res) => {
    const users = readData();
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    writeData(users);
    res.status(201).json({ message: 'User created successfully', newUser });
};

// PUT: Update data user
exports.updateUser = (req, res) => {
    let users = readData();
    const index = users.findIndex(u => u.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: 'User not found' });

    users[index] = { ...users[index], ...req.body };
    writeData(users);
    res.json({ message: 'User updated successfully', user: users[index] });
};

// DELETE: Hapus user berdasarkan ID
exports.deleteUser = (req, res) => {
    let users = readData();
    const newUsers = users.filter(u => u.id != req.params.id);
    if (users.length === newUsers.length) return res.status(404).json({ message: 'User not found' });

    writeData(newUsers);
    res.json({ message: 'User deleted successfully' });
};
