'use strict';

(function() {
  class ApplicationStartComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationStart', {
      templateUrl: 'app/application/start/start.html',
      controller: ApplicationStartComponent
    });
})();
