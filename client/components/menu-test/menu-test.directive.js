'use strict';

angular.module('projectRecacoApp')
  .directive('menuTest', function($cookies, listTest) {
    return {
      templateUrl: 'components/menu-test/menu-test.html',
      restrict: 'EA',
      link: function (scope) {
        scope.list = listTest.getList();
        scope.step = parseInt($cookies.get('SC_PR-test_step'));
      }
    };
  });
