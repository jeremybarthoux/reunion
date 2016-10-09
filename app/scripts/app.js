'use strict';

/**
 * @ngdoc overview
 * @name MeetingAngularApp
 * @description
 * # MeetingAngularApp
 *
 * Main module of the application.
 */
angular
  .module('MeetingAngularApp', [
    'ngRoute',
    'ngSanitize'
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
      .when('/project/:projectId/meeting/:meetingId', {
        templateUrl: 'views/meeting.html',
        controller: 'MeetingCtrl',
        controllerAs: 'meeting'
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

      $scope.projectUrl = newPath.length > 1 ? {id:newPath[1], active:true} : {active:false};

      $scope.meetingUrl = newPath.length > 3 ? {id:newPath[3], active:true} : {active:false};

      $scope.isActive = function (page) {
        var isActive = false;
        switch(page) {
          case 'list':
            isActive = newPath[0].length === 0 ? true : false;
            break;
          case 'project':
            isActive = newPath.length === 2 ? true : false;
            break;
          case 'meeting':
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


