(function(nyMarathon) {
	'use strict';
	nyMarathon.app.factory('ConfigFactory', function($http) {
		return {
			getConfig: function(){
				return $http.get("http://localhost:8080/api/config");
			}
		}
	});
}(NyMarathon));