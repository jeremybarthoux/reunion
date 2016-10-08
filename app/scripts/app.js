'use strict';

/**
 * @ngdoc overview
 * @name gestionReunionAngularApp
 * @description
 * # gestionReunionAngularApp
 *
 * Main module of the application.
 */
angular
  .module('gestionReunionAngularApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/project/:projectId', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      })
      .when('/project/:projectId/reunion/:reunionId', {
        templateUrl: 'views/reunion.html',
        controller: 'ReunionCtrl',
        controllerAs: 'reunion'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function() {
      if ($rootScope.tokken !== true) {
        $location.path('/login');
      }
    });
  })
  .controller('HeaderCtrl', function ($scope, $rootScope, $location) {

    $rootScope.$on('$routeChangeStart', function() {

      var newPath = $location.path().substr(1).split('/');

      $scope.isLogin = $rootScope.tokken ? true : false;

      $scope.projectUrl = newPath.length > 1
        ? {id:newPath[1], active:true}
        : {id:null, active:false};

      $scope.reunionUrl = newPath.length > 3
        ? {id:newPath[3], active:true}
        : {id:null, active:false};

      $scope.isActive = function (page) {
        var isActive = false;
        switch(page) {
          case 'list':
            isActive = newPath[0].length === 0 ? true : false;
            break;
          case 'project':
            isActive = newPath.length === 2 ? true : false;
            break;
          case 'reunion':
            isActive = newPath.length === 4 ? true : false;
            break;
        }
        return isActive ? 'active' : '';
      };

    });

    $scope.logout = function() {
      $rootScope.tokken = null;
      $location.path('/login');
    };

  });


