'use strict';

(function() {
  class ApplicationThanksComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationThanks', {
      templateUrl: 'app/application/thanks/thanks.html',
      controller: ApplicationThanksComponent
    });
})();
