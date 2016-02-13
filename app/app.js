import angular from 'angular';
import uirouter from 'angular-ui-router';
import oclazyLoad from 'oclazyload';

angular.module('app', [oclazyLoad, uirouter])
  .config(function routing($stateProvider) {
    $stateProvider
      .state('hello', {
        url: '/hello',
        template: require('./hello/hello.html'),
        controller: 'helloCtrl as ctrl',
        resolve: {
          loadModule: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require(['./hello/hello.module.js'], (module) => {
                resolve($ocLazyLoad.load({name: module.default}));
              });
            });
          }
        }
      })
      .state('about', {
        url: '/about',
        template: require('./about/about.html'),
        controller: 'aboutCtrl as ctrl',
        resolve: {
          loadModule: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require(['./about/about.module'], (module) => {
                resolve($ocLazyLoad.load({name: module.default}));
              });
            });
          }
        }
      });
  });