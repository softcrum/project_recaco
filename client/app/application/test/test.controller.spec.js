'use strict';

describe('Component: ApplicationTestComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationTestComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationTestComponent = $componentController('ApplicationTestComponent', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
