'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ContactIndex', {
        url: '/contact',
        template: '<contact-index></contact-index>'
      });
  });
