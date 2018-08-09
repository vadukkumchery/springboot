var app = angular.module("springModule", []).controller("springController", function($scope,$http) {
	
	$http.get('http://springbootapp-env.2u4jsb3uad.eu-west-3.elasticbeanstalk.com/topics').then(function(response) {
			
		
		var topics = response.data;
		$scope.topics = topics;
	}).catch(function(reason) {
		
	});
});
	
	
	 