'use strict';

var app = require('../..');
import request from 'supertest';

var newTest;

describe('Test API:', function() {

  describe('GET /api/test', function() {
    var tests;

    beforeEach(function(done) {
      request(app)
        .get('/api/test')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          tests = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(tests).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/test', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/test')
        .send({
          name: 'New Test',
          info: 'This is the brand new test!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTest = res.body;
          done();
        });
    });

    it('should respond with the newly created test', function() {
      expect(newTest.name).to.equal('New Test');
      expect(newTest.info).to.equal('This is the brand new test!!!');
    });

  });

  describe('GET /api/test/:id', function() {
    var test;

    beforeEach(function(done) {
      request(app)
        .get('/api/test/' + newTest._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          test = res.body;
          done();
        });
    });

    afterEach(function() {
      test = {};
    });

    it('should respond with the requested test', function() {
      expect(test.name).to.equal('New Test');
      expect(test.info).to.equal('This is the brand new test!!!');
    });

  });

  describe('PUT /api/test/:id', function() {
    var updatedTest;

    beforeEach(function(done) {
      request(app)
        .put('/api/test/' + newTest._id)
        .send({
          name: 'Updated Test',
          info: 'This is the updated test!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTest = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTest = {};
    });

    it('should respond with the updated test', function() {
      expect(updatedTest.name).to.equal('Updated Test');
      expect(updatedTest.info).to.equal('This is the updated test!!!');
    });

  });

  describe('DELETE /api/test/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/test/' + newTest._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when test does not exist', function(done) {
      request(app)
        .delete('/api/test/' + newTest._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
