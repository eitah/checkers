/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Board from '../models/board';
const router = module.exports = express.Router();
import bodyValidator from '../validators/boards/body';
import paramsValidator from '../validators/boards/params';

// show all
router.get('/', (req, res) => {
  Board.find().exec((err, boards) => {
    res.send({ boards });
  });
});

// create
router.post('/', bodyValidator, (req, res) => {
  Board.create(res.locals, (err, board) => {
    res.send({ board });
  });
});

// update
router.put('/:id', paramsValidator, bodyValidator, (req, res) => {
  Board.findByIdAndUpdate(req.params.id, res.locals, { new: true }, (err, board) => {
    console.log('board', board, err);
    res.send({ board });
  });
});

// delete
router.delete('/:id', paramsValidator, (req, res) => {
  Board.findByIdAndRemove(req.params.id, (err, board) => {
    if (board) {
      res.send({ id: board._id });
    } else {
      res.status(400).send({ messages: ['id not found'] });
    }
  });
});
