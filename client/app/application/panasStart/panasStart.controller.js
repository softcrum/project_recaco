'use strict';

(function() {
  class ApplicationPanasStartComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationPanasStart', {
      templateUrl: 'app/application/panasStart/panasStart.html',
      controller: ApplicationPanasStartComponent
    });
})();
