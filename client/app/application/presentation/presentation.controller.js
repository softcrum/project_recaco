'use strict';

(function() {
  class ApplicationPresentationComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationPresentation', {
      templateUrl: 'app/application/presentation/presentation.html',
      controller: ApplicationPresentationComponent
    });
})();
