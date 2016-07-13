/* eslint-disable no-unused-expressions, arrow-body-style, no-underscore-dangle, func-names */


import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Piece = require('../../dst/models/piece');


const schema = new Schema({
  name: { type: String,
          required: true,
          minlength: 3,
        },
  isTurn: { type: Boolean,
            default: false,
          },
  color: { type: String, enum: ['white', 'black'] },
  // pieces: { type: [ pieces ] },
  dateCreated: { type: Date, default: Date.now },
});

schema.methods.initPieces = function () {
  const startPlaces = (this.color === 'white') ? [{ x: 0, y: 0 },
                                                { x: 0, y: 2 },
                                                { x: 0, y: 4 },
                                                { x: 0, y: 6 },
                                                { x: 1, y: 1 },
                                                { x: 1, y: 3 },
                                                { x: 1, y: 5 },
                                                { x: 1, y: 7 },
                                                { x: 2, y: 0 },
                                                { x: 2, y: 2 },
                                                { x: 2, y: 4 },
                                                { x: 2, y: 6 },
                                              ] :
                                               [{ x: 6, y: 1 },
                                                { x: 6, y: 3 },
                                                { x: 6, y: 5 },
                                                { x: 6, y: 7 },
                                                { x: 7, y: 0 },
                                                { x: 7, y: 2 },
                                                { x: 7, y: 4 },
                                                { x: 7, y: 6 },
                                                { x: 8, y: 1 },
                                                { x: 8, y: 3 },
                                                { x: 8, y: 5 },
                                                { x: 8, y: 7 },
                                              ];

  const myArray = new Array(12).fill(0).map((v, i) => {
    return new Piece({
      location: startPlaces[i],
      status: 'alive',
      color: this.color,
      id: i + 1,
    });
  });
  this.pieces = myArray;
};

module.exports = mongoose.model('Player', schema);
