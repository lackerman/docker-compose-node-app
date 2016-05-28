'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const todoRouter = require('./app/routes/todos');
const adminRouter = require('./app/routes/admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.send('Ok');
});

app.use('/todo', todoRouter);
app.use('/admin', adminRouter);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).send(`Failed to execute the request. [${err.message}]`);
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Express server istening @ http://%s:%s', host, port);
});

module.exports = server;
