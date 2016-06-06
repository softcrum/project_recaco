'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('LegalFaqs', {
        url: '/legal/faqs',
        template: '<legal-faqs></legal-faqs>'
      });
  });
