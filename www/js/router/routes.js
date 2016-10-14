
(function(nyMarathon) {
	'use strict';
	nyMarathon.app.config(function($stateProvider) {
		$stateProvider
		.state('inscription', {
			url: '/inscription',
			controller: 'InscriptionsCtrl',
			templateUrl: 'templates/inscription.html'
		})
		.state('home', {
			url: '/',
			controller: 'HomeCtrl',
			templateUrl: 'templates/home.html'
		}).state('default', {
			url: '',
			controller: 'HomeCtrl',
			templateUrl: 'templates/home.html'
		});
	});
}(NyMarathon));