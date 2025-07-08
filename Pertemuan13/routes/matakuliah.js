const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const router = express.Router();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// CREATE
router.post('/', async (req, res) => {
    const { nama_matakuliah, sks } = req.body;
    const { data, error } = await supabase.from('matakuliah').insert({ nama_matakuliah, sks });
    res.status(error ? 400 : 201).json(error || data);
});

// READ
router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('matakuliah').select('*');
    res.status(error ? 400 : 200).json(error || data);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nama_matakuliah, sks } = req.body;
    const { data, error } = await supabase.from('matakuliah').update({ nama_matakuliah, sks }).eq('id', id);
    res.status(error ? 400 : 200).json(error || data);
});

// DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('matakuliah').delete().eq('id', id);
    res.status(error ? 400 : 200).json(error || data);
});

module.exports = router;
