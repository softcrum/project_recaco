'use strict';

angular.module('projectRecacoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ApplicationSelectGroup', {
        url: '/application/select_group',
        template: '<application-select-group></application-select-group>'
      });
  });
