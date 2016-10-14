(function(nyMarathon) {
	'use strict';
	nyMarathon.app.controller('HomeCtrl', function($scope, $location, $interval, getConfig) {
		var eventTs;
		nyMarathon.configData = getConfig.data;
		eventTs = new Date(nyMarathon.configData.eventTs);

		function dhms(t) {
			var days, hours, minutes, seconds;
			days = Math.floor(t / 86400);
			t -= days * 86400;
			hours = Math.floor(t / 3600) % 24;
			t -= hours * 3600;
			minutes = Math.floor(t / 60) % 60;
			t -= minutes * 60;
			seconds = t % 60;
			return [
				days + 'd',
				hours + 'h',
				minutes + 'm',
				seconds + 's'
			].join(' ');
		}

		if (nyMarathon.configData.eventTs) {
			$interval(function () {
				var diff;
				diff = Math.floor((eventTs.getTime() - new Date().getTime()) / 1000);
				$scope.timeTo = dhms(diff);
			}, 1000);
		}

		$scope.configData = nyMarathon.configData;
		$scope.backgroundApp = 'url(' + nyMarathon.configData.backgroundApp + ')';
		$scope.btnColor = nyMarathon.configData.btnColor;

		$scope.goToInscribe = function() {
			$location.path('inscription');
		}
	});
}(NyMarathon));