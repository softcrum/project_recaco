'use strict';

(function() {
  class ApplicationSensorComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationSensor', {
      templateUrl: 'app/application/sensor/sensor.html',
      controller: ApplicationSensorComponent
    });
})();
