'use strict';

describe('Component: PresentationComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var PresentationComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    PresentationComponent = $componentController('PresentationComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
