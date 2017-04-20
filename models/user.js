'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  dp: String,
  items: Array,
  likedItems: [Number],
  userId: String,
  google: {
    id: String,
    token: String,
    email: String
  },
  twitter: {
    id: String,
    token: String,
    username: String
  },
  facebook: {
    id: String,
    token: String,
    email: String
  }
});

// using es5 style function syntax so that `this` is bound
User.pre('save', function(next) {
  // get unique id
  const userId = new Date().getTime().toString();
  this.userId = userId;
  next();
});

module.exports = mongoose.model('User', User);
