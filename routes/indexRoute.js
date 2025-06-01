const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../DB/db');


router.get('/', (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) {
      return res.status(500).send('Database error');
    }else {
      res.render('index', { projects: results} )
    }
  })
})

router.get('/about', (req, res) => {
  //res.sendFile(path.join(__dirname, '../views/about.html'));
  res.render('about')
});

module.exports = router;
