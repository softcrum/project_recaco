'use strict';

describe('Component: AboutPublishComponent', function() {

  beforeEach(module('projectRecacoApp'));
  var AboutPublishComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    AboutPublishComponent = $componentController('AboutPublishComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
