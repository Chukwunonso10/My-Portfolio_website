const express = require('express');
const router = express.Router();
const db = require('../DB/db');
const path = require('path')

router.get('/', (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) return res.status(500).send('Database error');
    let html = '<h1>Projects</h1>';
    });
    res.render('portfolio');
  });

module.exports = router;
