'use strict';

const db = require('../db/db');
const router = require('express').Router(); // eslint-disable-line

const selectTodosQuery = 'SELECT * FROM todo';
const insertTodoQuery = 'INSERT INTO todo(text) VALUES ($1)';

router.get('/', (req, res, next) => {
  db.query(selectTodosQuery, (err, result) => {
    if (err) {
      return next(err);
    }
    return res.json(result.rows);
  });
});

router.post('/', (req, res, next) => {
  db.upsert(insertTodoQuery, [req.body.text], (err) => {
    if (err) {
      return next(err);
    }
    return res.end();
  });
});

module.exports = router;
