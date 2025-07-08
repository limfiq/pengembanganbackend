const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const router = express.Router();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// CREATE
router.post('/', async (req, res) => {
    const { nama, nim, prodi } = req.body;
    const { data, error } = await supabase.from('mahasiswa').insert({ nama, nim, prodi });
    res.status(error ? 400 : 201).json(error || data);
});

// READ
router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('mahasiswa').select('*');
    res.status(error ? 400 : 200).json(error || data);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nama, nim, prodi } = req.body;
    const { data, error } = await supabase.from('mahasiswa').update({ nama, nim, prodi }).eq('id', id);
    res.status(error ? 400 : 200).json(error || data);
});

// DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('mahasiswa').delete().eq('id', id);
    res.status(error ? 400 : 200).json(error || data);
});

module.exports = router;
