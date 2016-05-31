'use strict';

describe('Directive: menuTest', function () {

  // load the directive's module and view
  beforeEach(module('projectRecacoApp'));
  beforeEach(module('components/menu-test/menu-test.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menu-test></menu-test>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the menuTest directive');
  }));
});
