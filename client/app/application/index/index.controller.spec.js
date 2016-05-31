'use strict';

describe('Component: ApplicationIndexComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationIndexComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationIndexComponent = $componentController('ApplicationIndexComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
