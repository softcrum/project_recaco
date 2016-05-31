'use strict';

describe('Component: ApplicationPanasStartComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationPanasStartComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationPanasStartComponent = $componentController('ApplicationPanasStartComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
