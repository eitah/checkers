/* eslint-disable no-unused-expressions, no-underscore-dangle, max-len */

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../dst/server');
const cp = require('child_process');

describe('players', () => {
  beforeEach((done) => {
    cp.execFile(`${__dirname}/../scripts/players_populate.sh`, { cwd: `${__dirname}/../scripts` }, () => {
      done();
    });
  });

  // create
  describe('post /players', () => {
    it('should create a player', (done) => {
      request(app)
      .post('/players')
      .send({
        name: 'Rebecca Irons',
      })
      .end((err, rsp) => {
        expect(err).to.be.null;
        expect(rsp.status).to.equal(200);
        expect(rsp.body.player.name).to.equal('Rebecca Irons');
        done();
      });
    });
  });

  // update
  describe('put /players/:id', () => {
    it('should update a player', (done) => {
      request(app)
      .put('/players/01234567890123456789aaa1')
      .send({
        name: 'George Irons',
      })
      .end((err, rsp) => {
        expect(err).to.be.null;
        expect(rsp.status).to.equal(200);
        expect(rsp.body.player.name).to.equal('George Irons');
        done();
      });
    });
  });

  // delete
  describe('delete /players/:id', () => {
    it('should delete a player', (done) => {
      request(app)
      .delete('/players/01234567890123456789aaa1')
      .end((err, rsp) => {
        expect(err).to.be.null;
        expect(rsp.status).to.equal(200);
        expect(rsp.body.id).to.equal('01234567890123456789aaa1');
        done();
      });
    });
  });
});
