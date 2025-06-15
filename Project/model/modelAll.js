const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// modelAll.js

// Users Model
const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    role: { type: DataTypes.ENUM('admin', 'guru', 'siswa'), allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'users',
    timestamps: false
});

// Mapel Model
const Mapel = sequelize.define('Mapel', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nama: { type: DataTypes.STRING(100), allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'mapel',
    timestamps: false
});

// Siswa Model
const Siswa = sequelize.define('Siswa', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nama: { type: DataTypes.STRING(100), allowNull: false },
    nisn: { type: DataTypes.STRING(100), allowNull: false },
    alamat: { type: DataTypes.STRING(100), allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'siswa',
    timestamps: false
});

// Guru Model
const Guru = sequelize.define('Guru', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nama: { type: DataTypes.STRING(100), allowNull: false },
    nip: { type: DataTypes.STRING(100), allowNull: false },
    alamat: { type: DataTypes.STRING(100), allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'guru',
    timestamps: false
});

// Kelas Model
const Kelas = sequelize.define('Kelas', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nama: { type: DataTypes.STRING(100), allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'kelas',
    timestamps: false
});

// Jadwal Model
const Jadwal = sequelize.define('Jadwal', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_kelas: { type: DataTypes.INTEGER, allowNull: false },
    id_mapel: { type: DataTypes.INTEGER, allowNull: false },
    id_guru: { type: DataTypes.INTEGER, allowNull: false },
    hari: { type: DataTypes.ENUM('senin', 'selasa', 'rabu', 'kamis', 'jumat'), allowNull: false },
    jam: { type: DataTypes.TIME, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'jadwal',
    timestamps: false
});

// Nilai Model
const Nilai = sequelize.define('Nilai', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_siswa: { type: DataTypes.INTEGER, allowNull: false },
    id_mapel: { type: DataTypes.INTEGER, allowNull: false },
    id_kelas: { type: DataTypes.INTEGER, allowNull: false },
    nilai: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'nilai',
    timestamps: false
});

// Presensi Model
const Presensi = sequelize.define('Presensi', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_siswa: { type: DataTypes.INTEGER, allowNull: false },
    id_kelas: { type: DataTypes.INTEGER, allowNull: false },
    tanggal: { type: DataTypes.DATEONLY, allowNull: false },
    status: { type: DataTypes.ENUM('hadir', 'izin', 'sakit', 'alfa'), allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'presensi',
    timestamps: false
});

module.exports = {
    User,
    Mapel,
    Siswa,
    Guru,
    Kelas,
    Jadwal,
    Nilai,
    Presensi
};