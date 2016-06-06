'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutIndex', {
        url: '/about',
        template: '<about-index></about-index>'
      });
  });
