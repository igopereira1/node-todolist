const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));
app.use(express.json());
app.use(router);

module.exports = app;