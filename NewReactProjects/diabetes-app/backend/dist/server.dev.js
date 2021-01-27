"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cors = require('cors');

var PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});