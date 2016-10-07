'use strict';

/**
 * @ngdoc function
 * @name gestionReunionAngularApp.controller:ReunionCtrl
 * @description
 * # ReunionCtrl
 * Controller of the gestionReunionAngularApp
 */
angular.module('gestionReunionAngularApp')
  .controller('ReunionCtrl', function ($scope, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.reunionId = $routeParams.reunionId;

  });
