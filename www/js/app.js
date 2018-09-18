var app = angular.module('SimpleInterest',[]);

app.controller('main', function ($scope) {
	
	//$scope.Principle = Principle;
	//$scope.ROI = ;
	//$scope.Term = 20;
	
	$scope.myInterest = function (){
	
	$scope.interest = $scope.Principle * $scope.ROI * $scope.Term/100;
	
	console.log($scope.Principle);
	console.log($scope.interest);
	}
});