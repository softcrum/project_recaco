'use strict';

(function() {
  class ApplicationIndexComponent {
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
    addNewsletter() {
      this.http.get('/api/newsletter/search_email/' + this.scope.newsletter.email)
        .then((response) => {
          if (response.data.length === 0) {
            this.http.post('/api/newsletter', {
              email: this.scope.newsletter.email,
              notification: true
            })
              .then(() => {
                this.sweet.show({
                  showConfirmButton: false,
                  text: this.translate('application.email_text'),
                  timer: 7500,
                  title: this.translate('application.email_title'),
                  type: 'success'
                });
                this.scope.newsletter.email = '';
              })
              .catch(() => {
                this.sweet.show({
                  showConfirmButton: false,
                  text: this.translate('application.email_error_text'),
                  timer: 4500,
                  title: this.translate('application.email_error_title'),
                  type: 'warning'
                });
              });
          } else {
            this.sweet.show({
              showConfirmButton: false,
              text: this.translate('application.email_error_text'),
              timer: 4500,
              title: this.translate('application.email_error_title'),
              type: 'warning'
            });
          }
        });

    }
    executeApp() {
      this.http.post('/api/test', {
        user: {
          internal_key: this.uuid()
        }
      })
        .then((response) => {
          this.cookies.put('SC_PR-test_id', response.data._id);
          this.cookies.put('SC_PR-test_step', 2);
          this.sweet.show({
            showConfirmButton: false,
            text: this.translate('application.save_text'),
            timer: 3000,
            title: this.translate('application.save_title'),
            type: 'success'
          });
          this.state.go('ApplicationIntroduction');
        });
    }
    uuid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    verifyInitApp() {
      if (this.cookies.get('SC_PR-test_id')) {
        this.sweet.show({
          showConfirmButton: false,
          text: this.translate('application.init_text'),
          timer: 4500,
          title: this.translate('application.init_title'),
          type: 'warning'
        });
        this.state.go(this.listTest.getUrl());
      }
    }
  }
  angular.module('projectRecacoApp')
    .component('applicationIndex', {
      templateUrl: 'app/application/index/index.html',
      controller: ApplicationIndexComponent
    });
})();
