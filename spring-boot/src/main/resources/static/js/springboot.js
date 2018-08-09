var app = angular.module("springModule", []).controller("springController", function($scope,$http) {
	
	$http.get('http://localhost/topics').then(function(response) {
			
		
		var topics = response.data;
		$scope.topics = topics;
	}).catch(function(reason) {
		
	});
	
	$scope.add = function(){
			
		var topicdata = {
							id : $scope.topicid,
							name : $scope.topicname, 
							description : $scope.topicdescription
							};
	
		$http.post('http://localhost/topics', topicdata).then(function(value) {
			$scope.success=value;
		}, function(reason) {
			$scope.reason = reason;
			
		}, function(value) {
			$scope.value = value;
		});
	
		
	};
	
	
});
	
	
	 