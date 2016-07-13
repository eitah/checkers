/* eslint-disable no-unused-expressions, arrow-body-style, no-underscore-dangle, func-names */

const expect = require('chai').expect;
// const sinon = require('sinon');
const Player = require('../../dst/models/player');

describe('Player', () => {
  describe('constructor', () => {
    it('should create a player object', (done) => {
      const p = new Player({
        name: 'Joseph Irons',
      });
      p.validate(err => {
        expect(err).to.be.undefined;
        expect(p.name).to.equal('Joseph Irons');
        expect(p._id).to.be.ok;
        expect(p.dateCreated).to.be.ok;
        done();
      });
    });
  });
  //
  // describe('#initPieces', () => {
  //   it('should initialize the pieces array', (done) => {
  //     const p = new Player({
  //       name: 'Joseph Irons',
  //       color: 'white',
  //     });
  //
  //     p.initPieces();
  //     p.validate(err => {
  //       expect(err).to.be.undefined;
  //       expect(p.pieces.length).to.equal(12);
  //       // expect(typeof p.pieces[0]).to.equal('Piece');
  //       expect(p.pieces[0].color).to.equal('white');
  //       expect(p.pieces[0].id).to.equal(1);
  //       expect(p.pieces[0].location).to.deep.equal({ x: 0, y: 0 });
  //       done();
  //     });
  // //   });
  // });
});
