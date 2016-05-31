'use strict';

(function() {
  class ApplicationPreTestComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationPreTest', {
      templateUrl: 'app/application/preTest/preTest.html',
      controller: ApplicationPreTestComponent
    });
})();
