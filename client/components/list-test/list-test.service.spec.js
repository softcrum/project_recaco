'use strict';

describe('Service: listTest', function () {

  // load the service's module
  beforeEach(module('projectRecacoApp.listTest'));

  // instantiate service
  var listTest;
  beforeEach(inject(function (_listTest_) {
    listTest = _listTest_;
  }));

  it('should do something', function () {
    expect(!!listTest).to.be.true;
  });

});
