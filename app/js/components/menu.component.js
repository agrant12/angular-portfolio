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
					url: '/',
					class: ''
				},
				{
					text: 'Portfolio',
					url: '/',
					class: ''
				},
				{
					text: 'Branding',
					url: '/',
					class: 'branding'
				},
				{
					text: 'Journal',
					url: '/',
					class: ''
				},
				{
					text: 'Contact',
					url: '/',
					class: ''
				}
			]
		}
	});