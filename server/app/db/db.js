'use strict';

const pg = require('pg');
const dbServer = (process.env.DB_PORT || 'tcp://192.168.99.100:5432').substring(6);
const connectionString = `postgres://postgres@${dbServer}/testdb`;

function upsert(query, upsertValues, callback) {
  const connection = new pg.Client(connectionString);
  var processFn = (error, result) => {
    connection.end();
    callback(error, result);
  };
  connection.connect();
  if (upsertValues) {
    connection.query(query, upsertValues, processFn);
  } else {
    connection.query(query, processFn);
  }
}

function query(query, callback) {
  upsert(query, undefined, callback);
}

module.exports = {
  query: query,
  upsert: upsert,
};
