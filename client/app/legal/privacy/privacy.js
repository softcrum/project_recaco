'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('LegalPrivacy', {
        url: '/legal/privacy',
        template: '<legal-privacy></legal-privacy>'
      });
  });
