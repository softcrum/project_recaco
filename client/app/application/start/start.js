'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationStart', {
        url: '/application/start',
        template: '<application-start></application-start>'
      });
  });
