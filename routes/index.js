const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    ok: true,
    version: 'V.0.1',
    stuff: 'API is ready',
  });
});

router.get('*', (req, res) => {
  res.status(404).json({
    ok: false,
    error: 'route_not_found',
  });
});

module.exports = router;
