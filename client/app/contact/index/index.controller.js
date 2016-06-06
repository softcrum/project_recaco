'use strict';

(function(){
  class ContactIndexComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('contactIndex', {
      templateUrl: 'app/contact/index/index.html',
      controller: ContactIndexComponent
    });
})();
