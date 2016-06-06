'use strict';

describe('Component: AboutTeamComponent', function() {
  beforeEach(module('projectRecacoApp'));
  var AboutTeamComponent, scope;
  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    AboutTeamComponent = $componentController('AboutTeamComponent', {
      $scope: scope
    });
  }));
  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
