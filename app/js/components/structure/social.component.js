'use strict';

angular.
	module('AlvinGrant').
	component('social', {
		templateUrl: 'app/templates/social.template.html',
		controller: function SocialController($scope) {
			var self = this;
			$scope.icons = [
				{
					text: 'Github',
					url: 'https://github.com/agrant12',
					class: 'fa fa-code-fork'
				},
				{
					text: 'Instagram',
					url: 'https://www.instagram.com/agrantphotos/',
					class: 'fa fa-instagram'
				},
				{
					text: 'Twitter',
					url: 'https://twitter.com/agrantdesigns',
					class: 'fa fa-twitter'
				},
				{
					text: 'Linkedin',
					url: 'https://www.linkedin.com/in/alvingrant/',
					class: 'fa fa-linkedin-square'
				}
			]
		}
	});