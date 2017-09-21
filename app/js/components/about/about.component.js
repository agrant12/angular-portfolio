angular.
	module('about').
	component('about', {
		templateUrl: 'app/views/about.template.html',
		controller: ['$routeParams', '$http',
			function AboutController($routeParams, $http) {
				var self = this;
				
			}
		]
	});
