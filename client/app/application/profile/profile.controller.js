'use strict';

(function() {
  class ApplicationProfileComponent {
    constructor($cookies, $filter, $http, $scope, $state, listTest, socket, sweet) {
      this.cookies = $cookies;
      this.http = $http;
      this.listTest = listTest;
      this.scope = $scope;
      this.socket = socket;
      this.state = $state;
      this.sweet = sweet;
      this.translate = $filter('translate');
      this.verifyInitApp();
    }
    abortTest() {
      const thisP = this;
      this.sweet.show({
        closeOnConfirm: false,
        cancelButtonText: this.translate('application.abort_cancel'),
        confirmButtonColor: '#dd6b55',
        confirmButtonText: this.translate('application.abort_ok'),
        showCancelButton: true,
        title: this.translate('application.abort_title'),
        text: this.translate('application.abort_text'),
        type: 'warning'
      }, function () {
        thisP.http.delete('/api/test/' + thisP.cookies.get('SC_PR-test_id')).then(() => {
          thisP.cookies.remove('SC_PR-test_id');
          thisP.cookies.remove('SC_PR-test_step');
          thisP.sweet.show({
            showConfirmButton: false,
            text: thisP.translate('application.abort_text_success'),
            timer: 7500,
            title: thisP.translate('application.abort_title_success'),
            type: 'success'
          });
          thisP.state.go('ApplicationIndex');
        });
      });
    }
    executeApp() {
      this.http.put('/api/test/' + this.cookies.get('SC_PR-test_id'), {
        experiment: {
          date_update: Date.now()
        },
        test: {
          authorization: {
            introduction: true
          }
        }
      }).then(() => {
        this.cookies.put('SC_PR-test_step', parseInt(this.cookies.get('SC_PR-test_step')) + 1);
        this.sweet.show({
          showConfirmButton: false,
          text: this.translate('application.save_text'),
          timer: 3000,
          title: this.translate('application.save_title'),
          type: 'success'
        });
        this.state.go(this.listTest.getList()[parseInt(this.cookies.get('SC_PR-test_step')) - 1].url);
      });
    }
    verifyInitApp() {
      if (this.cookies.get('SC_PR-test_id')) {
        if (this.state.current.name !== this.listTest.getList()[parseInt(this.cookies.get('SC_PR-test_step')) - 1].url) {
          this.sweet.show({
            showConfirmButton: false,
            text: this.translate('application.init_text'),
            timer: 4500,
            title: this.translate('application.init_title'),
            type: 'warning'
          });
          this.state.go(this.listTest.getUrl());
        }
      } else {
        this.sweet.show({
          showConfirmButton: false,
          text: this.translate('application.not_init_text'),
          timer: 6000,
          title: this.translate('application.not_init_title'),
          type: 'warning'
        });
        this.state.go('ApplicationIndex');
      }
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationProfile', {
      templateUrl: 'app/application/profile/profile.html',
      controller: ApplicationProfileComponent
    });
})();
