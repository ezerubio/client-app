
(function(nyMarathon) {
	'use strict';
	nyMarathon.app.config(function($stateProvider) {
		$stateProvider
		.state('inscription', {
			url: '/inscription',
			templateUrl: 'templates/inscription.html'
		})
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html'
		}).state('default', {
			url: '',
			templateUrl: 'templates/home.html'
		});
	});
}(NyMarathon));