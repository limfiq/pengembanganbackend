const express = require('express');
const app = express();
const dashboard = require('./dashboard');

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

app.use(logger);


app.get('/', (req, res) => {
    res.send('Homepage');
});

app.use('/dashboard', require('./dashboard'));


app.listen(3000, () => console.log('Server running on port 3000'));