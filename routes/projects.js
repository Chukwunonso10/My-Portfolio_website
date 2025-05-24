const express = require('express');
const router = express.Router();
const db = require('../DB/db');
const path = require('path')

router.get('/', (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) return res.status(500).send('Database error');
    let html = '<h1>Projects</h1>';
    results.forEach(project => {
      html += `<div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.tech_used}</p>
        <a href="${project.github_link}">GitHub</a> | 
        <a href="${project.live_demo_link}">Live Demo</a>
      </div>`;
    });
    //res.send(html);
    res.sendFile(path.join(__dirname, '../views/portfolio.html'));
  });
});

module.exports = router;
