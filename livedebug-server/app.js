const express = require('express');

const app = express();

const routes = require('./routes/index.js');
const errorHandler = require('./middlewares/error-handler');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);
app.use(errorHandler);


module.exports = app;
