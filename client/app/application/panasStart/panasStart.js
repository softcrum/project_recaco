'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationPanasStart', {
        url: '/application/panas_start',
        template: '<application-panas-start></application-panas-start>'
      });
  });
