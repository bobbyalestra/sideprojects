"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema; //create schema for todo

var TodoSchema = new Schema({
  action: {
    type: Number,
    required: [true, 'The todo text field is required']
  }
}); //create model for todo

var Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;