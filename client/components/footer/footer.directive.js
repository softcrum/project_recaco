'use strict';

angular.module('projectRecacoApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'EA',
      link: function (scope) {
        let year = new Date().getFullYear();
        scope.address = {
          format: 'Avenida Perú 0895, La Cisterna, Santiago',
          point: 'https://www.google.cl/maps/place/Per%C3%BA+895,+La+Cisterna,+Regi%C3%B3n+Metropolitana/@-33.5386653,-70.6808617,17z/data=!3m1!4b1!4m5!3m4!1s0x9662dba9acbe1ad7:0x3e086002dae54d6d!8m2!3d-33.5386698!4d-70.6786677'
        };
        scope.date = (year > 2015 ? `2015-${year}` : '2015');
        scope.email = 'recaco@softcrum.com';
        scope.phone = {
          call: '56942329319',
          format: '+56 9 4232 9319'
        }
      }
    };
  });
