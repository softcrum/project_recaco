'use strict';

(function() {
  class ApplicationResultComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationResult', {
      templateUrl: 'app/application/result/result.html',
      controller: ApplicationResultComponent
    });
})();
