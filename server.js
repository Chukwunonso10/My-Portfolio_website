const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const indexRoutes = require('./routes/index');
const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contactRoute');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', indexRoutes);
app.use('/portfolio', projectRoutes);
app.use('/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
