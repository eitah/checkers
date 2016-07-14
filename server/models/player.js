/* eslint-disable no-unused-expressions, arrow-body-style, no-underscore-dangle, func-names */


import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String,
          required: true,
          minlength: 3,
        },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Player', schema);
