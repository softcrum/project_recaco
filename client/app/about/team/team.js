'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutTeam', {
        url: '/about/team',
        template: '<about-team></about-team>'
      });
  });
