'use strict';

describe('Component: ApplicationConsentComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationConsentComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationConsentComponent = $componentController('ApplicationConsentComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
