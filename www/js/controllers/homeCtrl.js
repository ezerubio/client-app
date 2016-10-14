(function(nyMarathon) {
	'use strict';
	nyMarathon.app.controller('HomeCtrl', function($scope, $location, getConfig) {
		nyMarathon.configData = getConfig.data;
		

		$scope.configData = nyMarathon.configData;
		$scope.backgroundApp = 'url(' + nyMarathon.configData.backgroundApp + ')';

		$scope.goToInscribe = function() {
			$location.path('inscription');
		}
	});
}(NyMarathon));