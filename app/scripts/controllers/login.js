'use strict';

/**
 * @ngdoc function
 * @name gestionReunionAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gestionReunionAngularApp
 */
angular.module('gestionReunionAngularApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.connect = function() {
        $rootScope.tokken = true;
        $location.path('/');
    };
  });
