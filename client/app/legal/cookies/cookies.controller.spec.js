'use strict';

describe('Component: LegalCookiesComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var LegalCookiesComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    LegalCookiesComponent = $componentController('LegalCookiesComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
