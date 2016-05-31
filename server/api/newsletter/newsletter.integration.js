'use strict';

var app = require('../..');
import request from 'supertest';

var newNewsletter;

describe('Newsletter API:', function() {

  describe('GET /api/newsletter', function() {
    var newsletters;

    beforeEach(function(done) {
      request(app)
        .get('/api/newsletter')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newsletters = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(newsletters).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/newsletter', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/newsletter')
        .send({
          name: 'New Newsletter',
          info: 'This is the brand new newsletter!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newNewsletter = res.body;
          done();
        });
    });

    it('should respond with the newly created newsletter', function() {
      expect(newNewsletter.name).to.equal('New Newsletter');
      expect(newNewsletter.info).to.equal('This is the brand new newsletter!!!');
    });

  });

  describe('GET /api/newsletter/:id', function() {
    var newsletter;

    beforeEach(function(done) {
      request(app)
        .get('/api/newsletter/' + newNewsletter._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newsletter = res.body;
          done();
        });
    });

    afterEach(function() {
      newsletter = {};
    });

    it('should respond with the requested newsletter', function() {
      expect(newsletter.name).to.equal('New Newsletter');
      expect(newsletter.info).to.equal('This is the brand new newsletter!!!');
    });

  });

  describe('PUT /api/newsletter/:id', function() {
    var updatedNewsletter;

    beforeEach(function(done) {
      request(app)
        .put('/api/newsletter/' + newNewsletter._id)
        .send({
          name: 'Updated Newsletter',
          info: 'This is the updated newsletter!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedNewsletter = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedNewsletter = {};
    });

    it('should respond with the updated newsletter', function() {
      expect(updatedNewsletter.name).to.equal('Updated Newsletter');
      expect(updatedNewsletter.info).to.equal('This is the updated newsletter!!!');
    });

  });

  describe('DELETE /api/newsletter/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/newsletter/' + newNewsletter._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when newsletter does not exist', function(done) {
      request(app)
        .delete('/api/newsletter/' + newNewsletter._id)
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
