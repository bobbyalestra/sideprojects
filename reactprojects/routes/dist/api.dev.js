"use strict";

var express = require('express');

var router = express.Router();

var Todo = require('../models/todo');

router.get('/todos', function (req, res, next) {
  //this will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'action').then(function (data) {
    return res.json(data);
  })["catch"](next);
});
router.post('/todos', function (req, res, next) {
  if (req.body.action) {
    Todo.create(req.body).then(function (data) {
      return res.json(data);
    })["catch"](next);
  } else {
    res.json({
      error: "The input field is empty"
    });
  }
});
router["delete"]('/todos/:id', function (req, res, next) {
  Todo.findOneAndDelete({
    "_id": req.params.id
  }).then(function (data) {
    return res.json(data);
  })["catch"](next);
});
module.exports = router;