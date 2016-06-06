'use strict';

(function() {
  class AboutTeamComponent {
    constructor() {
      this.message = 'Hello';
    }
  }
  angular.module('projectRecacoApp')
    .component('aboutTeam', {
      templateUrl: 'app/about/team/team.html',
      controller: AboutTeamComponent
    });
})();
