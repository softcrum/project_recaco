'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationProfile', {
        url: '/application/profile',
        template: '<application-profile></application-profile>'
      });
  });
