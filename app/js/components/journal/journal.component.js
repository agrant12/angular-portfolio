'use strict';

angular.
	module('AlvinGrant').
	component('journal', {
		templateUrl: 'app/templates/journal.template.html',
		controller: ['$routeParams', '$http',
			function JournalController ($routeParams, $http) {
				var self = this;
				$http.get('http://alvingrant.com/api/wp-json/wp/v2/posts?per_page=3&categories=4').then(function(response) {
					self.jitems = response.data;
					console.log(self.jitems);
				});
			}
		]
	});