'use strict';

angular.module('projectRecacoApp',
  [
    'projectRecacoApp.admin',
    'projectRecacoApp.auth',
    'projectRecacoApp.constants',
    'btford.socket-io',
    'hSweetAlert',
    'ngCookies',
    'ngMaterial',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'pascalprecht.translate',
    'ui.router',
    'validation.match'
  ])
  .config(function($cookiesProvider, $locationProvider, $translateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
    $translateProvider.useStaticFilesLoader({
      prefix: 'languages/',
      suffix: '.json'
    });
    $translateProvider.useSanitizeValueStrategy();
  })
  .controller('AppCtrl', function ($scope, $translate, $cookies) {
    $scope.appChangeLanguage = function (key) {
      $translate.use(key);
      $cookies.put('SC_PR-language', key);
    };
  })
  .run(function($cookies, $document, $rootScope, $state, $translate) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (toState.security && !$cookies.get('SC_PR-user')) {
        $state.transitionTo('AuthenticateLogin');
        event.preventDefault();
      } else if (toState.name === 'AuthenticateLogin' && $cookies.get('SC_PR-user')) {
        $state.transitionTo('DashboardIndex');
        event.preventDefault();
      }
    });
    var defaultLanguage = $cookies.get('SC_PR-language');
    if (defaultLanguage) {
      $translate.use(defaultLanguage);
    } else {
      $translate.use('es');
    }
  });
