"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var routes = require('./routes/api');

var path = require('path');

var dotenv = require("dotenv");

dotenv.config();
var app = express();
var port = process.env.PORT || 5000; //connect to the database

mongoose.connect(process.env.DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function () {
  return console.log("Database connected successfully");
})["catch"](function (err) {
  return console.log(err);
}); //since mongoose promise is depreciated, we overide it with node's promise

mongoose.Promise = global.Promise;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use('/api', routes);
app.use(function (err, req, res, next) {
  console.log(err);
  next();
});
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});