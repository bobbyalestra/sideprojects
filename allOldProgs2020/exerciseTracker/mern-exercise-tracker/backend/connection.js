// const mongoose = require('mongoose');



// mongoose.connect('mongodb', {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     if (err)
//        console.error(err);
//     else
//        console.log("Connected to the mongodb"); 
//   });


  const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const mongoURI = 'mongodb://localhost:27017';

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
MongoClient.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));