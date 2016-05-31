'use strict';

describe('Component: ApplicationStartComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationStartComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationStartComponent = $componentController('ApplicationStartComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
