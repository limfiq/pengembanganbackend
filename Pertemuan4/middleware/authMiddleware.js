const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token || token !== 'Bearer secret-token') {
        return res.status(403).json({ message: 'Unauthorized: Invalid token' });
    }

    next();
};

module.exports = authMiddleware;
