'use strict';

/**
 * @ngdoc function
 * @name MeetingAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the MeetingAngularApp
 */
angular.module('MeetingAngularApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.connect = function(user) {
        console.log('suppose :: user data -> format -> xht -> compart to DB :: ',user);
        if ($scope.connectForm.$valid) {
            $rootScope.tokken = true;
            $location.path('/');
        }
    };
  });
