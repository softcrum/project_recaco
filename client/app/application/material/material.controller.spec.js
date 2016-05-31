'use strict';

describe('Component: ApplicationMaterialComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationMaterialComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationMaterialComponent = $componentController('ApplicationMaterialComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
