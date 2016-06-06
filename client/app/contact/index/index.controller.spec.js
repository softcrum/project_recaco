'use strict';

describe('Component: IndexComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var IndexComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    IndexComponent = $componentController('IndexComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
