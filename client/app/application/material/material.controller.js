'use strict';

(function(){
  class ApplicationMaterialComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationMaterial', {
      templateUrl: 'app/application/material/material.html',
      controller: ApplicationMaterialComponent
    });
})();
