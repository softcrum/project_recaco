'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationResult', {
        url: '/application/result',
        template: '<application-result></application-result>'
      });
  });
