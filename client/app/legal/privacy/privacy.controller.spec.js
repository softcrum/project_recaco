'use strict';

describe('Component: LegalPrivacyComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var LegalPrivacyComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    LegalPrivacyComponent = $componentController('LegalPrivacyComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
