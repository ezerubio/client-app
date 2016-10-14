(function(nyMarathon) {
	'use strict';
	nyMarathon.app.controller('InscriptionsCtrl', function($scope, $location) {
		$scope.backHome = function() {
			$location.path('/');
		}
	});
}(NyMarathon));