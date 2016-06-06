'use strict';

(function() {
  class AboutIndexComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('aboutIndex', {
      templateUrl: 'app/about/index/index.html',
      controller: AboutIndexComponent
    });
})();
