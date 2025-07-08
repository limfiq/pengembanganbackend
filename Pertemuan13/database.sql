--Tabel Mahasiswa
CREATE TABLE mahasiswa(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nama TEXT NOT NULL,
    nim VARCHAR(20) UNIQUE NOT NULL,
    prodi TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

--Tabel Matakuliah
CREATE TABLE matakuliah(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nama_matakuliah TEXT NOT NULL,
    sks INTEGER NOT NULL CHECK(sks > 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    mahasiswa (id, nama, nim, prodi)
VALUES (
        'a1111111-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'Budi Santoso',
        '2201001',
        'Teknik Informatika'
    ),
    (
        'a2222222-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'Siti Aminah',
        '2201002',
        'Sistem Informasi'
    ),
    (
        'a3333333-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'Ahmad Fauzi',
        '2201003',
        'Teknik Komputer'
    );

INSERT INTO
    matakuliah (id, nama_matakuliah, sks)
VALUES (
        'b1111111-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        'Pemrograman Web',
        3
    ),
    (
        'b2222222-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        'Basis Data',
        4
    ),
    (
        'b3333333-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        'Jaringan Komputer',
        3
    );
