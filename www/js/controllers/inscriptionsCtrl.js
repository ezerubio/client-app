(function(nyMarathon) {
	'use strict';
	nyMarathon.app.controller('InscriptionsCtrl', function($scope, $location, $http, $ionicPopup) {
		$scope.inscription = {};
		$scope.config = nyMarathon.configData;
		$scope.backgroundApp = 'url(' + nyMarathon.configData.backgroundApp + ')';

		$scope.saveInscription = function(inscription) {
			var config = nyMarathon.configData,
				url = config.inscriptionEndPoint;

 			if(validateForm(inscription)) {
 				$http.post(url, inscription).then(function (res){
					$ionicPopup.alert({
						title: config.successTitle,
						template: config.successMsg
					});
						
				}, function() {
					$ionicPopup.alert({
						title: 'Server error' ,
						template: 'An error happened. Please try later'
					});
				});	
 			}
		}

		$scope.backHome = function() {
			$location.path('/');
		}

		function validateForm(inscription) {
			var isValid = true,
				regexp;
			nyMarathon.configData.fields.forEach(function(field) {
				field.error = false;
				if (field.isRequired && !inscription[field.name]) {
					field.error = true;
					isValid = false;
				}
				if (field.regexp) {
					regexp = new RegExp(field.regexp);
					isValid = regexp.test(inscription[field.name]);
					if (!isValid) {
						field.error = true;	
					}
				}
			});
			return isValid;
		}
	});
}(NyMarathon));