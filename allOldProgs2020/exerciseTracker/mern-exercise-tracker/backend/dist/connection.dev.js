"use strict";

// const mongoose = require('mongoose');
// mongoose.connect('mongodb', {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     if (err)
//        console.error(err);
//     else
//        console.log("Connected to the mongodb"); 
//   });
var express = require('express');

var mongoose = require('mongoose');

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var mongoURI = 'mongodb://localhost:27017'; //DB Config

var db = require('./config/keys').mongoURI; // Connect to MongoDB


MongoClient.connect(db, {
  useNewUrlParser: true
}).then(function () {
  return console.log('MongoDB Connected');
})["catch"](function (err) {
  return console.log(err);
});


