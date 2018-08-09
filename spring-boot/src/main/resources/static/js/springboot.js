var app = angular.module("springModule", []).controller("springController", function($scope,$http) {
	
	$http.get('http://localhost/topics').then(function(response) {
			
		
		var topics = response.data;
		$scope.topics = topics;
	}).catch(function(reason) {
		
	});
});
	
	
	 