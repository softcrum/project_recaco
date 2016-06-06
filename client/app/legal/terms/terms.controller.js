'use strict';

(function() {
  class LegalTermsComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('legalTerms', {
      templateUrl: 'app/legal/terms/terms.html',
      controller: LegalTermsComponent
    });
})();
