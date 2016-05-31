'use strict';

describe('Component: ApplicationSensorComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationSensorComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationSensorComponent = $componentController('ApplicationSensorComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
