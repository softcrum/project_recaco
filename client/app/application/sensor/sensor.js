'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationSensor', {
        url: '/application/sensor',
        template: '<application-sensor></application-sensor>'
      });
  });
