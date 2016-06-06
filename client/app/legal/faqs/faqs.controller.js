'use strict';

(function() {
  class LegalFaqsComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('legalFaqs', {
      templateUrl: 'app/legal/faqs/faqs.html',
      controller: LegalFaqsComponent
    });
})();
