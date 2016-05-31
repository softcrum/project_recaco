'use strict';

describe('Component: ApplicationPanasFinishComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationPanasFinishComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationPanasFinishComponent = $componentController('ApplicationPanasFinishComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
