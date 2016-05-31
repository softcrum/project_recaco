'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationTest', {
        url: '/application/test',
        template: '<application-test></application-test>'
      });
  });
