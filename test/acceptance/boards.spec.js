/* eslint-disable no-unused-expressions, no-underscore-dangle, max-len */

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../dst/server');
const cp = require('child_process');

describe('boards', () => {
  beforeEach((done) => {
    cp.execFile(`${__dirname}/../scripts/players_populate.sh`, { cwd: `${__dirname}/../scripts` }, () => {
      cp.execFile(`${__dirname}/../scripts/boards_populate.sh`, { cwd: `${__dirname}/../scripts` }, () => {
        done();
      });
    });
  });

  // create
  describe('post /boards', () => {
    it('should create a board', (done) => {
      request(app)
      .post('/boards')
      .send({
        player1: '01234567890123456789aaa1',
        player2: '01234567890123456789aaa2',
      })
      .end((err, rsp) => {
        expect(err).to.be.null;
        expect(rsp.status).to.equal(200);
        expect(rsp.body.board.player1).to.equal('01234567890123456789aaa1');
        done();
      });
    });
  });

  // update
  describe('put /boards/:id', () => {
    it('should update a board', (done) => {
      request(app)
      .put('/boards/01234567890123456789bbb1')
      .send({
        player2: '01234567890123456789aaa3',
      })
      .end((err, rsp) => {
        expect(err).to.be.null;
        expect(rsp.status).to.equal(200);
        expect(rsp.body.board.player2).to.equal('01234567890123456789aaa3');
        done();
      });
    });
  });

  // delete
  describe('delete /boards/:id', () => {
    it('should delete a board', (done) => {
      request(app)
      .delete('/boards/01234567890123456789bbb2')
      .end((err, rsp) => {
        expect(err).to.be.null;
        expect(rsp.status).to.equal(200);
        expect(rsp.body.id).to.equal('01234567890123456789bbb2');
        done();
      });
    });
  });
});
