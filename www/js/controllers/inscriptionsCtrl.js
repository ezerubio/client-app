(function(nyMarathon) {
	'use strict';
	nyMarathon.app.controller('InscriptionsCtrl', function($scope, $location, $http, $ionicPopup) {
		$scope.inscription = {};
		$scope.saveInscription = function(inscription) {
			var url = 'http://localhost:8080/api/inscription';
 			if(validateForm(inscription)) {
 				$http.post(url, inscription).then(function (res){
					$ionicPopup.alert({
						title:'Congratulations!',
						template:'You are enrolled in the marathon'
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