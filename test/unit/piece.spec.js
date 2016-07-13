/* eslint-disable no-unused-expressions, no-underscore-dangle, func-names */
const expect = require('chai').expect;
// const sinon = require('sinon');
const Piece = require('../../dst/models/piece');

describe('Piece', () => {
  describe('constructor', () => {
    it('should create a piece object', () => {
      const p = new Piece({
        location: { x: 0, y: 0 },
        status: 'alive',
        color: 'white',
        id: 1,
      });
      expect(p.id).to.equal(1);
      expect(p.location).to.be.deep.equal({ x: 0, y: 0 });
      expect(p._id).to.be.ok;
    });
  });
});
