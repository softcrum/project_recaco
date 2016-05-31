'use strict';

(function() {
  class ApplicationPanasFinishComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationPanasFinish', {
      templateUrl: 'app/application/panasFinish/panasFinish.html',
      controller: ApplicationPanasFinishComponent
    });
})();
