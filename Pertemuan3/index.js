const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Get Data!');
});

//create middleware for logging using methode url and date
const middleware = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

app.use(middleware);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

