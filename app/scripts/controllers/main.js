'use strict';

/**
 * @ngdoc function
 * @name gestionReunionAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gestionReunionAngularApp
 */
angular.module('gestionReunionAngularApp')
  .controller('MainCtrl', function ($scope,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projects = [
    	{
    		name: 'Project 1',
    		id: 1
    	},
    	{
    		name: 'Project 2',
    		id: 2
    	},
    	{
    		name: 'Project 3',
    		id: 3
    	},
    	{
    		name: 'Project 4',
    		id: 4
    	},
    	{
    		name: 'Project 5',
    		id: 5
    	},
    	{
    		name: 'Project 6',
    		id: 6
    	}
    ];
  });
