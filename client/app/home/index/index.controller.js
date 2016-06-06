'use strict';

(function() {
  class HomeIndexComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('homeIndex', {
      templateUrl: 'app/home/index/index.html',
      controller: HomeIndexComponent
    });
})();
