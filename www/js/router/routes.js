
(function(nyMarathon) {
	'use strict';
	var _getConfig =  function(ConfigFactory, $stateParams) {
		return ConfigFactory.getConfig();
	};
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
			resolve: {
				getConfig: _getConfig
			},
			templateUrl: 'templates/home.html'
		}).state('default', {
			url: '',
			controller: 'HomeCtrl',
			resolve: {
				getConfig: _getConfig
			},
			templateUrl: 'templates/home.html'
		});
	});
}(NyMarathon));