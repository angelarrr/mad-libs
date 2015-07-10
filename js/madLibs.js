angular.module('madLibs', [])
	.controller('madController', function($scope) {
		$scope.name = "name";
		$scope.jobTitle = "job title";
		$scope.tediousTask = "tedious task";
		$scope.dirtyTask = "dirty task";
		$scope.celebrity = "celebrity name";
		$scope.uselessSkill = "useless skill";
		$scope.adjective = "adjective";
		$scope.obnoxiousCelebrity = "obnoxious celebrity";
		$scope.hugeNumber = "enter a huge number";
		$scope.gender = "";

		$scope.male = function() {
			$scope.heShe = "he";
			$scope.himHer = "him";
			$scope.hisHer = "his";
		};

		$scope.female = function() {
			$scope.heShe = "she";
			$scope.himHer = "her";
			$scope.hisHer = "her";
		}
	});