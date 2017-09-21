angular.
	module('AlvinGrant').
	config(['$locationProvider', '$routeProvider',
	function config($locationProvider, $routeProvider) {
		//$locationProvider.hashPrefix('!');
		$routeProvider.
			when('/', {
				template: '<index></index>'
			}).
			when('/about', {
				template: '<about></about>'
			}).
			otherwise('/');
		}
	]);