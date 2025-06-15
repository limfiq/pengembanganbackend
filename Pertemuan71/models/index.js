const sequelize = require('../config/database');
const Mahasiswa = require('./mahasiswa')(sequelize);
const Matakuliah = require('./matakuliah')(sequelize);
const RPS = require('./rps')(sequelize);

Mahasiswa.belongsToMany(Matakuliah, { through: RPS, foreignKey: 'mahasiswa_id' });
Matakuliah.belongsToMany(Mahasiswa, { through: RPS, foreignKey: 'matakuliah_id' });

module.exports = { sequelize, Mahasiswa, Matakuliah, RPS };
