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
      .otherwise({
        redirectTo: '/'
      });
  });
