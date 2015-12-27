'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send("Ok")
});

app.use('/todo', require('./routes/todos'));
app.use('/admin', require('./routes/admin'));

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send(`Failed to execute the request. [${err.message}]`);
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Express server istening @ http://%s:%s', host, port);
});

module.exports = server;
