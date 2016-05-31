'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationPresentation', {
        url: '/application/presentation',
        template: '<application-presentation></application-presentation>'
      });
  });
