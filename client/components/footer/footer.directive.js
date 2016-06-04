'use strict';

angular.module('projectRecacoApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        let year = new Date().getFullYear();
        scope.date = (year > 2015 ? `2015-${year}` : '2015');
      }
    };
  });
