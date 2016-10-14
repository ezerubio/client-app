(function(nyMarathon) {
	'use strict';
	nyMarathon.app.controller('HomeCtrl', function($scope, $location) {
		$scope.goToInscribe = function() {
			$location.path('inscription');
		}
	});
}(NyMarathon));