/* eslint-disable no-unused-expressions, arrow-body-style, no-underscore-dangle, func-names */

const expect = require('chai').expect;
// const sinon = require('sinon');
const Board = require('../../dst/models/board');
const Player = require('../../dst/models/player');

describe('Board', () => {
  describe('constructor', () => {
    it('should create a board object', (done) => {
      const p1 = new Player({
        name: 'Joseph Irons',
      });
      const p2 = new Player({
        name: 'Bob Riggs',
      });
      const b = new Board({
        player1: p1._id,
        player2: p2._id,
      });
      b.validate(err => {
        expect(err).to.be.undefined;
        expect(b._id).to.be.ok;
        expect(b.dateCreated).to.be.ok;
        expect(b.pieces).to.be.ok;
        done();
      });
    });
  });

  describe('#initPieces', () => {
    it('should initialize the pieces array', (done) => {
      const p1 = new Player({
        name: 'Joseph Irons',
      });
      const p2 = new Player({
        name: 'Bob Riggs',
      });
      const b = new Board({
        player1: p1._id,
        player2: p2._id,
      });
      b.initPieces();
      b.validate(err => {
        expect(err).to.be.undefined;
        expect(b.pieces.length).to.equal(24);
        // expect(typeof p.pieces[0]).to.equal('Piece');
        expect(b.pieces[0].color).to.equal('white');
        expect(b.pieces[12].color).to.equal('black');
        expect(b.pieces[0].id).to.equal(1);
        expect(b.pieces[12].id).to.equal(13);
        expect(b.pieces[0].location).to.deep.equal({ x: 0, y: 0 });
        expect(b.pieces[12].location).to.deep.equal({ x: 1, y: 6 });
        done();
      });
    });
  });
});
