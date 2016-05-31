'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationPanasFinish', {
        url: '/application/panas_finish',
        template: '<application-panas-finish></application-panas-finish>'
      });
  });
