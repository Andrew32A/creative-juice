/* eslint-disable new-cap */
require('mongoose');
require('dotenv').config();

const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const server = require('http').Server(app);

// Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({extended: false}));

// controllers

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
});

module.exports = app;