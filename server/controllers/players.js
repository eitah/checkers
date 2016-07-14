/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Player from '../models/player';
const router = module.exports = express.Router();
import bodyValidator from '../validators/players/body';
import paramsValidator from '../validators/players/params';

// show all
router.get('/', (req, res) => {
  Player.find().exec((err, players) => {
    res.send({ players });
  });
});

// create
router.post('/', bodyValidator, (req, res) => {
  Player.create(res.locals, (err, player) => {
    res.send({ player });
  });
});

// update
router.put('/:id', paramsValidator, bodyValidator, (req, res) => {
  Player.findByIdAndUpdate(req.params.id, res.locals, { new: true }, (err, player) => {
    res.send({ player });
  });
});

// delete
router.delete('/:id', paramsValidator, (req, res) => {
  Player.findByIdAndRemove(req.params.id, (err, player) => {
    if (player) {
      res.send({ id: player._id });
    } else {
      res.status(400).send({ messages: ['id not found'] });
    }
  });
});
