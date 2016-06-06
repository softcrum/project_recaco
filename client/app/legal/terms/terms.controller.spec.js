'use strict';

describe('Component: LegalTermsComponent', function() {

  beforeEach(module('projectRecacoApp'));
  var LegalTermsComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    LegalTermsComponent = $componentController('LegalTermsComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
