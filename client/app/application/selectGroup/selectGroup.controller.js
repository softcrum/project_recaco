'use strict';

(function() {
  class ApplicationSelectGroupComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('selectGroup', {
      templateUrl: 'app/application/selectGroup/selectGroup.html',
      controller: ApplicationSelectGroupComponent
    });
})();
