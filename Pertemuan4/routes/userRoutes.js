const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Dummy data
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// GET All Users (Public)
router.get('/', (req, res) => {
    res.json(users);
});

// GET User by ID (Protected)
router.get('/:id', authMiddleware, (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// POST Add User (Protected)
router.post('/', authMiddleware, (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// DELETE User (Protected)
router.delete('/:id', authMiddleware, (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: 'User deleted' });
});

module.exports = router;
