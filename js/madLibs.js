var app = angular.module('madLibs', ['ngAnimate'])

app.controller('madController', function($scope) {
	$scope.display = 0;

	$scope.male = function() {
		$scope.heShe = "he";
		$scope.himHer = "him";
		$scope.hisHer = "his";
	};

	$scope.female = function() {
		$scope.heShe = "she";
		$scope.himHer = "her";
		$scope.hisHer = "her";
	};

	$scope.submit = function(){
		if ($scope.myForm.$valid) {
			console.log('Form is valid!');
			$scope.display = !0;
		} else {
			console.log('Form is not valid!');
		}
	};

	$scope.reset = function() {
		// reset display
		$scope.display = 0;

		// reset form to unsubmitted state
		$scope.myForm.$setPristine();
		$scope.myForm.$setUntouched();

		$scope.name = "";
		$scope.jobTitle = "";
		$scope.tediousTask = "";
		$scope.dirtyTask = "";
		$scope.celebrity = "";
		$scope.uselessSkill = "";
		$scope.adjective = "";
		$scope.obnoxiousCelebrity = "";
		$scope.hugeNumber = "";
		$scope.gender = "";
	};
			
});