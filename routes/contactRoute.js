const express = require('express');
const router = express.Router();
const db = require('../DB/db');
const path = require('path');


router.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, '../views/contact.html'));
  res.render('contact')
});

router.post('/form', (req, res) => {
  const {name, email, message, subject} = req.body;
  console.log(name, email, message, subject)
  if (!name || !email || !message || !subject) {
    return res.status(400).send('All fields are required.');
  }

  const sql = 'INSERT INTO contacts (name, email, message, subject) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, message, subject], (err, result) => {
    if (err) return res.status(500).send('Failed to save message.');
    
    res.send('Thank you!. Your Message has been sucessfully received');
    console.log('inserted sucessfully')
  });
});

module.exports = router;
