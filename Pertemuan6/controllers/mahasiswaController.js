const db = require('../configs/db');

// Ambil semua mahasiswa
exports.getMahasiswa = (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Ambil mahasiswa berdasarkan ID
exports.getMahasiswaById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM mahasiswa WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
};

// Tambah data mahasiswa
exports.createMahasiswa = (req, res) => {
    const { nama, nim, jurusan } = req.body;
    db.query('INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?, ?, ?)', [nama, nim, jurusan], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, nama, nim, jurusan });
    });
};

// Update data mahasiswa
exports.updateMahasiswa = (req, res) => {
    const { nama, nim, jurusan } = req.body;
    const id = req.params.id;
    db.query('UPDATE mahasiswa SET nama = ?, nim = ?, jurusan = ? WHERE id = ?', [nama, nim, jurusan, id], (err) => {
        if (err) throw err;
        res.json({ id, nama, nim, jurusan });
    });
};

// Hapus data mahasiswa
exports.deleteMahasiswa = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM mahasiswa WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Data mahasiswa berhasil dihapus' });
    });
};
