'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationPreTest', {
        url: '/application/pre_test',
        template: '<application-pre-test></application-pre-test>'
      });
  });
