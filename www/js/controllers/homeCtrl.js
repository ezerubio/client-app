(function(nyMarathon) {
	'use strict';
	nyMarathon.app.controller('HomeCtrl', function($scope, $location, getConfig) {
		nyMarathon.configData = getConfig.data;
		
		$scope.configData = nyMarathon.configData;
		
		$scope.goToInscribe = function() {
			$location.path('inscription');
		}
	});
}(NyMarathon));