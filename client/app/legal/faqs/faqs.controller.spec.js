'use strict';

describe('Component: LegalFaqsComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var LegalFaqsComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    LegalFaqsComponent = $componentController('LegalFaqsComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
