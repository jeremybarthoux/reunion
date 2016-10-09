'use strict';

/**
 * @ngdoc function
 * @name gestionReunionAngularApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the gestionReunionAngularApp
 */
angular.module('gestionReunionAngularApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, $location, $rootScope) {
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
            date: '2016-10-03T08:00:57.984Z'
        },
        {
            id: 2,
            name: 'Coffee time',
            date: '2016-15-03T06:30:57.984Z'
        },
        {
            id: 3,
            name: 'Budget metting',
            date: '2016-20-03T14:59:57.984Z'
        },
        {
            id: 4,
            name: 'Debriefing',
            date: '2016-22-03T16:59:57.984Z'
        }
    ];

    $rootScope.reunionList = $scope.reunions;

    $scope.projectId = $routeParams.projectId;

    $scope.openReunion = function(id) {
        $location.path('project/'+$scope.projectId+'/reunion/'+id);
    };


  });
