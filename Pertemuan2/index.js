const express = require('express');

const app = express();
const port = 3000;


//routing
app.get('/', (req, res) => {
    res.send('Get Data!');
});

app.post('/', (req, res) => {
    res.send('Post Data!');
});
app.put('/', (req, res) => {
    res.send('Put Data!');
});
app.delete('/', (req, res) => {
    res.send('Delete Data!');
});

//route with parameter
app.get('/profile/:name', (req, res) => {
    res.send(`Profile name: ${req.params.name}`);
});

//route with many parameter
app.get('/profile/:name/:age', (req, res) => {
    res.send(`Profile name: ${req.params.name}, age: ${req.params.age}`);
});

//route with query
app.get('/contact', (req, res) => {
    res.send(`Contact Name
    ${req.query.name}
    `);
});

//middleware in route
const middleware = (req, res, next) => {
    console.log('Middleware');
    next();
};

app.get('/middleware', middleware, (req, res) => {
    res.send('Middleware');
});

const user = require('./user');
app.use('/user', user);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
