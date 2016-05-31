'use strict';

describe('Component: ApplicationSelectGroupComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationSelectGroupComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationSelectGroupComponent = $componentController('ApplicationSelectGroupComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
