// const express = require('express');

// const app = express();

// // Logging Middleware
// const loggingMiddleware = (req, res, next) => {
//     const currentDateTime = new Date();
//     const formattedDate = currentDateTime.toISOString();
//     const method = req.method;
//     const url = req.url;
//     const status = res.statusCode;

//     const log = `[${formattedDate}] ${method}:${url} ${status}`;
//     console.log(log);

//     next();
// };

// app.use(loggingMiddleware);

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

//router level middleware
const express = require('express');
const router = express.Router();

// Middleware untuk logging khusus rute /user
router.use((req, res, next) => {
    console.log(`Request ke User Route: ${req.method} ${req.url}`);
    next();
});

router.get('/', (req, res) => {
    res.send('User List');
});

router.get('/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
