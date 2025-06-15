const express = require('express');
const { sequelize } = require('./models');
const mahasiswaRoutes = require('./routes/mahasiswa');
const matakuliahRoutes = require('./routes/matakuliah');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();
app.use(express.json());

app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/api/matakuliah', matakuliahRoutes);
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server is running on port 3000'));
});