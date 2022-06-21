const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
require('dotenv').config();
const APIRoutes = require('./routes');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite',
});

app.use('/api/', APIRoutes);
app.get('*', (req, res) => {
  res.status(404).json({
    ok: false,
    error: 'route_not_found',
    env: process.env.NODE_ENV,
  });
});

app.listen(8080, () => console.log('App Working port 8080'));
