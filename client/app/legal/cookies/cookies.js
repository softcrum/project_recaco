'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('LegalCookies', {
        url: '/legal/cookies',
        template: '<legal-cookies></legal-cookies>'
      });
  });
