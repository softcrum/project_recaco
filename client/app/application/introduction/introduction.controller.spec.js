'use strict';

describe('Component: ApplicationIntroductionComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var ApplicationIntroductionComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    ApplicationIntroductionComponent = $componentController('ApplicationIntroductionComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
