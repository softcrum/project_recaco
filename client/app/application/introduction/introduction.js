'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationIntroduction', {
        url: '/application/introduction',
        template: '<application-introduction></application-introduction>'
      });
  });
