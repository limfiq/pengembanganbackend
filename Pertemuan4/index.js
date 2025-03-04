const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const userRoutes = require('./userRoutes');
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});