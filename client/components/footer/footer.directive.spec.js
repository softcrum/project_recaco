'use strict';

describe('Directive: footer', function () {

  // load the directive's module and view
  beforeEach(module('projectRecacoApp'));
  beforeEach(module('components/footer/footer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<footer></footer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the footer directive');
  }));
});
