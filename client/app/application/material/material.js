'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationMaterial', {
        url: '/application/material',
        template: '<application-material></application-material>'
      });
  });
