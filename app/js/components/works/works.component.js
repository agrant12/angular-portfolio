'use strict';

angular.
	module('work').
	component('work', {
		templateUrl: 'app/templates/work.template.html',
		controller: ['$routeParams', '$http',
			function WorkController ($routeParams, $http) {
				var self = this;
				$http.get('http://alvingrant.com/api/wp-json/wp/v2/posts?per_page=6&categories=2').then(function(response) {
					self.items = response.data;
					console.log(self.items);
				});
			}
		]
	});