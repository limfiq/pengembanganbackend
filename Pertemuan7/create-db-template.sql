CREATE DATABASE akademik
    DEFAULT CHARACTER SET = 'utf8mb4';

use akademik;
CREATE table mahasiswa (
    id INT NOT NULL AUTO_INCREMENT,
    nim VARCHAR(10) NOT NULL,
    nama VARCHAR(50) NOT NULL,
    jurusan VARCHAR(50),
    PRIMARY KEY (id)
);