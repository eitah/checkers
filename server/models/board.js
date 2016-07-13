/* eslint-disable no-unused-expressions, arrow-body-style, no-underscore-dangle, func-names */


import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Piece = require('../../dst/models/piece');

const schema = new Schema({
  player1: { type: String,
          required: true,
        },
  player2: { type: String,
          required: true,
          },
  pieces: { type: Array, default: [] },
  dateCreated: { type: Date, default: Date.now },
});

schema.methods.initPieces = function () {
  const startPlaces = [{ x: 0, y: 0 },
                      { x: 2, y: 0 },
                      { x: 4, y: 0 },
                      { x: 6, y: 0 },
                      { x: 1, y: 1 },
                      { x: 3, y: 1 },
                      { x: 5, y: 1 },
                      { x: 7, y: 1 },
                      { x: 0, y: 2 },
                      { x: 2, y: 2 },
                      { x: 4, y: 2 },
                      { x: 6, y: 2 },
                      { x: 1, y: 6 },
                      { x: 3, y: 6 },
                      { x: 5, y: 6 },
                      { x: 7, y: 6 },
                      { x: 0, y: 7 },
                      { x: 2, y: 7 },
                      { x: 4, y: 7 },
                      { x: 6, y: 7 },
                      { x: 1, y: 8 },
                      { x: 3, y: 8 },
                      { x: 5, y: 8 },
                      { x: 7, y: 8 },
                      ];

  const whitePieces = new Array(12).fill(0).map((v, i) => {
    return new Piece({
      location: startPlaces[i],
      status: 'alive',
      color: 'white',
      id: i + 1,
    });
  });
  const blackPieces = new Array(12).fill(0).map((v, i) => {
    return new Piece({
      location: startPlaces[i + 12],
      status: 'alive',
      color: 'black',
      id: i + 13,
    });
  });
  Array.prototype.push.apply(whitePieces, blackPieces);
  this.pieces = whitePieces;
  return this.pieces;
};


module.exports = mongoose.model('Board', schema);
