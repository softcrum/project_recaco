'use strict';

describe('Component: ApplicationThanksComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationThanksComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationThanksComponent = $componentController('ApplicationThanksComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
