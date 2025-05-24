const express = require('express');
const router = express.Router();
const db = require('../DB/db');
const path = require('path');


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

router.post('/contacts', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) return res.status(500).send('Failed to save message.');
    res.send('<h2>Thank you for your message!</h2><a href="/">Back to home</a>');
  });
});

module.exports = router;
