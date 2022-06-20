const express = require('express');
const app = express();
require('dotenv').config();

const APIRoutes = require('./routes');

app.use('/api/', APIRoutes);
app.get('*', (req, res) => {
  res.status(404).json({
    ok: false,
    error: 'route_not_found',
    env: process.env.APP_NAME || 'mrrp',
  });
});

app.listen(8080, () => console.log('App Working port 8080'));
