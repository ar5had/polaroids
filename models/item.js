'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
  caption: String,
  picture: String,
  likesCount: Number,
  likers: Array,
  owner: String
});

module.exports = mongoose.model('Item', Item);
