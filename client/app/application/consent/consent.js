'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationConsent', {
        url: '/application/consent',
        template: '<application-consent></application-consent>'
      });
  });
