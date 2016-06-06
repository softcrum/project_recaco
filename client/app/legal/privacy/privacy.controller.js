'use strict';

(function() {
  class LegalPrivacyComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('legalPrivacy', {
      templateUrl: 'app/legal/privacy/privacy.html',
      controller: LegalPrivacyComponent
    });
})();
