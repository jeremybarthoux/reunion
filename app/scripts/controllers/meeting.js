'use strict';

/**
 * @ngdoc function
 * @name MeetingAngularApp.controller:meetingCtrl
 * @description
 * # meetingCtrl
 * Controller of the MeetingAngularApp
 */
angular.module('MeetingAngularApp')
  .controller('MeetingCtrl', function ($scope, $routeParams, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.meetingName = $rootScope.meetingList[$routeParams.meetingId - 1].name;

    $scope.users = [
		{
			id: 1,
			name: 'shefd',
			email: 'gf@few.com'
		},
		{
			id: 2,
			name: 'shefd',
			email: 'gf@few.com'
		},
		{
			id: 3,
			name: 'shefd',
			email: 'gf@few.com'
		},

		{
			id: 4,
			name: 'shefd',
			email: 'gf@few.com'
		},
		{
			id: 5,
			name: 'shefd',
			email: 'gf@few.com'
		},

		{
			id: 6,
			name: 'shefd',
			email: 'gf@few.com'
		},
		{
			id: 7,
			name: 'shefd',
			email: 'gf@few.com'
		}
	];

    $scope.notes = [
		{
			id: 1,
			name: 'dfsdfdsdf',
			desc: ' Cras tempus eu nunc sit amet sollicitudin. Vestibulum elementum laoreet lectus, sed mollis sem. Proin neque est, facilisis id felis sit amet, sodales pulvinar arcu. </br> Pellentesque nec ligula quis est tempus euismod. Quisque interdum imperdiet velit sit amet lacinia. Nulla aliquet tempus ipsum, sit amet elementum ex finibus in. Nullam cursus viverra ipsum a rutrum. Curabitur aliquam porta maximus. Mauris at facilisis lacus. Nunc vehicula risus sit amet ante sollicitudin tincidunt. Aliquam interdum ut leo id ultricies. Fusce quis elit vel mi vulputate sagittis eu eu odio. Suspendisse finibus a erat et ornare. Phasellus in elit dui. Morbi id leo scelerisque eros convallis ornare. '
		},
		{
			id: 2,
			name: 'dfsdfdsdf',
			desc: 'Vestibulum eu tempus turpis. Cras elementum sem id ex cursus, in aliquet nisl sodales. Aliquam ut lectus tempus, elementum dolor non, iaculis felis. </br></br>Vestibulum purus ex, sodales at nunc quis, venenatis elementum nisi. Nulla nulla arcu, posuere eu purus eu, interdum finibus quam. Nam vel diam arcu. In eu ex efficitur magna gravida hendrerit. Suspendisse potenti. Nunc semper maximus nisl. '
		},
		{
			id: 3,
			name: 'dfsdfdsdf',
			desc: ' Cras Curabitur placerat ornare magna, ut auctor justo iaculis vitae. Donec tristique finibus viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris neque erat, pellentesque id rutrum vel, egestas id nisi. Donec suscipit feugiat sapien vel sodales. Vivamus vehicula est elit, vel pulvinar tortor viverra id. In eleifend, lorem vitae varius ornare, sapien elit porta purus, eu vehicula mi sapien id nibh. Duis convallis pharetra nibh, sed pharetra est sodales vel. </br> Fusce accumsan sed turpis vitae porttitor. Duis gravida mattis fringilla. Quisque rhoncus nisl in leo blandit faucibus. Sed at mi ultrices, pulvinar augue et, varius nunc. Proin eget commodo purus, sed congue ligula. it dui. Morbi id leo scelerisque eros convallis ornare. '
		},
		{
			id: 4,
			name: 'dfsdfdsdf',
			desc: 'consectetur adipiscing elit. Suspendisse tempus et urna ac elementum. Aliquam erat volutpat. Nulla iaculis tellus in molestie mattis. Aliquam euismod sollicitudin dignissim. Nunc vel ultricies turpis. Phasellus iaculis arcu in dui finibus, a porttitor massa porta. Duis turpis dui, tempor id viverra lobortis, vehicula eget neque. Maecenas eu dapibus leo, sed commodo justo. Sed congue tincidunt mauris in sodales. Cras tempus eu nunc sit amet sollicitudin. Vestibulum elementum laoreet lectus, sed mollis sem. </br></br>Proin neque est, facilisis id felis sit amet, sodales pulvinar arcu. Pellentesque nec lig'
		}
	];


  });
