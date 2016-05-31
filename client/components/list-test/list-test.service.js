'use strict';

angular.module('projectRecacoApp')
  .factory('listTest', function($cookies) {
    const list = [{
      icon: 'ionic',
      step: 1,
      url: 'ApplicationIndex'
    }, {
      icon: 'ios-paper-outline',
      step: 2,
      url: 'ApplicationIntroduction'
    }, {
      icon: 'ios-bookmarks-outline',
      step: 3,
      url: 'ApplicationConsent'
    }, {
      icon: 'ios-person-outline',
      step: 4,
      url: 'ApplicationProfile'
    }, {
      icon: 'social-buffer-outline',
      step: 5,
      url: 'ApplicationPresentation'
    }, {
      icon: 'ios-videocam-outline',
      step: 6,
      url: 'ApplicationSensor'
    }, {
      icon: 'aperture',
      step: 7,
      url: 'ApplicationSelectGroup'
    }, {
      icon: 'ios-color-filter-outline',
      step: 8,
      url: 'ApplicationStart'
    }, {
      icon: 'ios-flask-outline',
      step: 9,
      url: 'ApplicationPanasStart'
    }, {
      icon: 'ios-barcode-outline',
      step: 10,
      url: 'ApplicationMaterial'
    }, {
      icon: 'ios-list-outline',
      step: 11,
      url: 'ApplicationPreTest'
    }, {
      icon: 'ios-compose-outline',
      step: 12,
      url: 'ApplicationTest'
    }, {
      icon: 'ios-flask-outline',
      step: 13,
      url: 'ApplicationPanasFinish'
    }, {
      icon: 'ios-speedometer-outline',
      step: 14,
      url: 'ApplicationResult'
    }, {
      icon: 'social-snapchat-outline',
      step: 15,
      url: 'ApplicationThank'
    }];
    const step = $cookies.get('SC_PR-test_step');
    let url = 'ApplicationIndex';
    return {
      getList: function() {
        return list;
      },
      getUrl: function() {
        if (step) {
          list.forEach((item) => {
            if (item.step === parseInt(step)) {
              url = item.url;
            }
          });
        }
        return url;
      }
    };
  });
