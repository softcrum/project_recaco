'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('AboutPublish', {
        url: '/about/publish',
        template: '<about-publish></about-publish>'
      });
  });
