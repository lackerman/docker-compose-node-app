'use strict';

const db = require('../db/db');
const router = require('express').Router();

router.get('/init', (req, res, next) => {
  db.query('CREATE TABLE todo(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)', (err, result) => {
    if (err) {
      return next(err);
    }
    res.end();
  });
});

router.get('/', (req, res, next) => {
  db.query('SELECT * FROM todo', (err, result) => {
    if (err) {
      return next(err);
    }
    res.json(result.rows);
  });
});

router.post('/', (req, res, next) => {
  db.upsert('INSERT INTO todo(text) VALUES ($1)', [req.body.text], (err, result) => {
    if (err) {
      return next(err);
    }
    res.end();
  });
});

module.exports = router;
