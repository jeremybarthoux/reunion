'use strict';

/**
 * @ngdoc function
 * @name MeetingAngularApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the MeetingAngularApp
 */
angular.module('MeetingAngularApp')
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
    //  $scope.meetings = response;
    // }, function errorCallback(response) {
    //  alert('Error load data : ' + response );
    // });

    // Fictitious data
    $scope.meetings = [
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

    $rootScope.meetingList = $scope.meetings;

    $scope.projectId = $routeParams.projectId;

    $scope.openMeeting = function(id) {
        $location.path('project/'+$scope.projectId+'/meeting/'+id);
    };


  });
