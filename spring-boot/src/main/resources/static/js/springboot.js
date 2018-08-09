var app = angular.module("springModule", []).controller("springController", function($scope) {
	
	 var topics =[
		 	{id:"spring",name:"Spring Frame Wokr", description:"Spring Framework Description"},
			{id:"java",name:"Core Java", description:"Core Java Description"},
			{id:"js",name:"Node JS", description:"NodeJs Description"},
			{id:"aws",name:"Amazon Web Service", description:"Amazon Web Services Architect"}
	 ];
	 $scope.topics = topics;
});