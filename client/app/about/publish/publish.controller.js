'use strict';

(function() {
class AboutPublishComponent {
  constructor() {
    this.message = 'Hello';
  }
}
angular.module('projectRecacoApp')
  .component('aboutPublish', {
    templateUrl: 'app/about/publish/publish.html',
    controller: AboutPublishComponent
  });
})();
