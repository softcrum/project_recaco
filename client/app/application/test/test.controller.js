'use strict';

(function() {
  class ApplicationTestComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationTest', {
      templateUrl: 'app/application/test/test.html',
      controller: ApplicationTestComponent
    });
})();
