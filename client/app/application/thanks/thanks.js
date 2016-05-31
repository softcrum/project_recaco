'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationThanks', {
        url: '/application/thanks',
        template: '<application-thanks></application-thanks>'
      });
  });
