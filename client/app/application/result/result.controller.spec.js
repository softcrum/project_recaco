'use strict';

describe('Component: ApplicationResultComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationResultComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationResultComponent = $componentController('ApplicationResultComponent', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
