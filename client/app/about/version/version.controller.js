'use strict';

(function() {
  class AboutVersionComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('aboutVersion', {
      templateUrl: 'app/about/version/version.html',
      controller: AboutVersionComponent
    });
})();
