'use strict';

angular.module('projectRecacoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('ApplicationIndex', {
        url: '/',
        template: '<application-index></application-index>'
      });
  });
