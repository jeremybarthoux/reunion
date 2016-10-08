'use strict';

/**
 * @ngdoc function
 * @name gestionReunionAngularApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the gestionReunionAngularApp
 */
angular.module('gestionReunionAngularApp')
  .controller('ProjectCtrl', function ($scope, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.projectId = $routeParams.projectId;

    // dynamic with $http (XHRrequest) with projectId in params
    // EXEMPLE :
    // $http({
    //  method: 'GET',
    //  url: 'api/project/'+ $routeParams.projectId
    // }).then(function successCallback(response) {
    //  $scope.reunions = response;
    // }, function errorCallback(response) {
    //  alert('Error load data : ' + response );
    // });

    // Fictitious data
    $scope.reunions = [
        {
            id: 1,
            name: 'Reunion 1',
            date: '10-10-2016'
        },
        {
            id: 2,
            name: 'Reunion 2',
            date: '10-10-2016'
        },
        {
            id: 3,
            name: 'Reunion 3',
            date: '10-10-2016'
        },

        {
            id: 4,
            name: 'Reunion 4',
            date: '10-10-2016'
        }
    ];

  });
