'use strict';

describe('Component: ApplicationProfileComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationProfileComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationProfileComponent = $componentController('ApplicationProfileComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
