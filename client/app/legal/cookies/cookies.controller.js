'use strict';

(function() {
  class LegalCookiesComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('legalCookies', {
      templateUrl: 'app/legal/cookies/cookies.html',
      controller: LegalCookiesComponent
    });
})();
