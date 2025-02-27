const express = require('express');
const router = express.Router();

const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send('Unauthorized');
    }
    next();
};

router.get('/dashboard', authMiddleware, (req, res) => {
    res.send('Dashboard Page');
});

module.exports = router;