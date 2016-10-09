'use strict';

/**
 * @ngdoc function
 * @name gestionReunionAngularApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the gestionReunionAngularApp
 */
angular.module('gestionReunionAngularApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
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
            name: 'Manager metting',
            date: '10-10-2016'
        },
        {
            id: 2,
            name: 'Coffee time',
            date: '05-10-2016'
        },
        {
            id: 3,
            name: 'Budget metting',
            date: '20-10-2016'
        },
        {
            id: 4,
            name: 'Debriefing',
            date: '30-10-2016'
        }
    ];

    $scope.projectId = $routeParams.projectId;

    $scope.openReunion = function(id) {
        $location.path('project/'+$scope.projectId+'/reunion/'+id);
    };


  });
