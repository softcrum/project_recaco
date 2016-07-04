'use strict';

angular.module('projectRecacoApp')
  .factory('listTest', function($cookies, $filter) {
    const translate = $filter('translate');
    const list = [{
      icon: 'ionic',
      name: translate('menu_test.application_index'),
      step: 1,
      url: 'ApplicationIndex'
    }, {
      icon: 'ios-paper-outline',
      name: translate('menu_test.application_introduction'),
      step: 2,
      url: 'ApplicationIntroduction'
    }, {
      icon: 'ios-bookmarks-outline',
      name: translate('menu_test.application_consent'),
      step: 3,
      url: 'ApplicationConsent'
    }, {
      icon: 'ios-person-outline',
      name: translate('menu_test.application_profile'),
      step: 4,
      url: 'ApplicationProfile'
    }, {
      icon: 'social-buffer-outline',
      name: translate('menu_test.application_presentation'),
      step: 5,
      url: 'ApplicationPresentation'
    }, {
      icon: 'ios-videocam-outline',
      name: translate('menu_test.application_sensor'),
      step: 6,
      url: 'ApplicationSensor'
    }, {
      icon: 'aperture',
      name: translate('menu_test.application_select_group'),
      step: 7,
      url: 'ApplicationSelectGroup'
    }, {
      icon: 'ios-color-filter-outline',
      name: translate('menu_test.application_start'),
      step: 8,
      url: 'ApplicationStart'
    }, {
      icon: 'ios-flask-outline',
      name: translate('menu_test.application_panas_start'),
      step: 9,
      url: 'ApplicationPanasStart'
    }, {
      icon: 'ios-barcode-outline',
      name: translate('menu_test.application_material'),
      step: 10,
      url: 'ApplicationMaterial'
    }, {
      icon: 'ios-list-outline',
      name: translate('menu_test.application_pre_test'),
      step: 11,
      url: 'ApplicationPreTest'
    }, {
      icon: 'ios-compose-outline',
      name: translate('menu_test.application_test'),
      step: 12,
      url: 'ApplicationTest'
    }, {
      icon: 'ios-flask-outline',
      name: translate('menu_test.application_panas_finish'),
      step: 13,
      url: 'ApplicationPanasFinish'
    }, {
      icon: 'ios-speedometer-outline',
      name: translate('menu_test.application_result'),
      step: 14,
      url: 'ApplicationResult'
    }, {
      icon: 'social-snapchat-outline',
      name: translate('menu_test.application_thank'),
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
