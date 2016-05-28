'use strict';

const pg = require('pg');
const connectionString =
  `postgres://postgres@${process.env.DB_SERVER}:${process.env.DB_PORT}/testdb`;

function upsert(sqlQuery, upsertValues, callback) {
  const connection = new pg.Client(connectionString);
  const processFn = (error, result) => {
    connection.end();
    callback(error, result);
  };
  connection.connect();
  if (upsertValues) {
    connection.query(sqlQuery, upsertValues, processFn);
  } else {
    connection.query(sqlQuery, processFn);
  }
}

function query(sqlQuery, callback) {
  upsert(sqlQuery, undefined, callback);
}

module.exports = {
  query,
  upsert,
};
