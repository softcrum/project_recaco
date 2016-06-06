'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('LegalTerms', {
        url: '/legal',
        template: '<legal-terms></legal-terms>'
      });
  });
