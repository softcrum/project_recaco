'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var newsletterCtrlStub = {
  index: 'newsletterCtrl.index',
  show: 'newsletterCtrl.show',
  create: 'newsletterCtrl.create',
  update: 'newsletterCtrl.update',
  destroy: 'newsletterCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var newsletterIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './newsletter.controller': newsletterCtrlStub
});

describe('Newsletter API Router:', function() {

  it('should return an express router instance', function() {
    expect(newsletterIndex).to.equal(routerStub);
  });

  describe('GET /api/newsletter', function() {

    it('should route to newsletter.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'newsletterCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/newsletter/:id', function() {

    it('should route to newsletter.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'newsletterCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/newsletter', function() {

    it('should route to newsletter.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'newsletterCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/newsletter/:id', function() {

    it('should route to newsletter.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'newsletterCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/newsletter/:id', function() {

    it('should route to newsletter.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'newsletterCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/newsletter/:id', function() {

    it('should route to newsletter.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'newsletterCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
