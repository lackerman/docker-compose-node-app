'use strict';

const db = require('../db/db');
const router = require('express').Router(); // eslint-disable-line

const createDbQuery = `
  CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    text VARCHAR(40) NOT NULL,
    complete BOOLEAN
  )`;

router.get('/init', (req, res, next) => {
  db.query(createDbQuery, (err) => {
    if (err) {
      return next(err);
    }
    return res.end();
  });
});

module.exports = router;
