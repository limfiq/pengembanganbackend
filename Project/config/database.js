const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('presensi', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // set true jika ingin melihat query di console
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;