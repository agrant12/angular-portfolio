'use strict';

angular.
	module('AlvinGrant').
	component('menu', {
		templateUrl: 'app/templates/menu.template.html',
		controller: function MenuController($scope) {
			var self = this;
			$scope.items = [
				{
					text: 'About',
					url: '#!/about',
					class: ''
				},
				{
					text: 'Portfolio',
					url: '#!/portfolio',
					class: ''
				},
				{
					text: 'Branding',
					url: '#!/',
					class: 'branding'
				},
				{
					text: 'Journal',
					url: '#!/journal',
					class: ''
				},
				{
					text: 'Contact',
					url: '/contact',
					class: ''
				}
			]
		}
	});