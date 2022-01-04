const express = require('express');
const dbconfig = require('./app/config/config');
const bodyParser = require('body-parser');
const menuRoutes = require('./app/routes/ro.menu');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
dbconfig();
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to NewsApp application.' });
});

app.use('/login', menuRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
