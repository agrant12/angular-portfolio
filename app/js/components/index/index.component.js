angular.
	module('index').
	component('index', {
		templateUrl: 'app/views/index.template.html',
		controller: ['$routeParams', '$http',
			function IndexController($routeParams, $http) {
				var self = this;
				$http.get('http://alvingrant.com/api/wp-json/wp/v2/posts?per_page=1&categories=2').then(function(response) {
					self.items = response.data;
					console.log(self.items);
				});
			}
		]
	});
