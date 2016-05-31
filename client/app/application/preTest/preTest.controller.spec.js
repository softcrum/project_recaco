'use strict';

describe('Component: ApplicationPreTestComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationPreTestComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationPreTestComponent = $componentController('ApplicationPreTestComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
