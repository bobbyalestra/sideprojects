"use strict";

var router = require('express').Router();

var Exercise = require('../models/exercise.model');

router.route('/').get(function (req, res) {
  Exercise.find().then(function (exercises) {
    return res.json(exercises);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
router.route('/add').post(function (req, res) {
  var username = req.body.username;
  var description = req.body.description;
  var duration = Number(req.body.duration);
  var date = Date.parse(req.body.date);
  var newExercise = new Exercise({
    username: username,
    description: description,
    duration: duration,
    date: date
  });
  newExercise.save().then(function () {
    return res.json('Exercise added!');
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
router.route('/:id').get(function (req, res) {
  Exercise.findById(req.params.id).then(function (exercise) {
    return res.json(exercise);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
router.route('/:id')["delete"](function (req, res) {
  Exercise.findByIdAndDelete(req.params.id).then(function () {
    return res.json('Exercise deleted.');
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
router.route('/update/:id').post(function (req, res) {
  Exercise.findById(req.params.id).then(function (exercise) {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);
    exercise.save().then(function () {
      return res.json('Exercise updated!');
    })["catch"](function (err) {
      return res.status(400).json('Error: ' + err);
    });
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
});
module.exports = router;