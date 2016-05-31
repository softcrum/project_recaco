'use strict';

angular.module('projectRecacoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('ApplicationIndex', {
        url: '/application',
        template: '<application-index></application-index>'
      });
  });
