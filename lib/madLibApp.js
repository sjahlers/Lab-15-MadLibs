(function() {
	var app = angular.module("madLibApp", ["ngRoute"]);

app.config(function($routeProvider) {
		
	$routeProvider.when("/form", {
		templateUrl: "form.html",
		controller: "formController"
	});
	$routeProvider.when("/madlib", {
		templateUrl: "madlib.html",
		controller: "madLibController"
	});
	$routeProvider.otherwise({
		template: "Your MadLib is loading..."
	});
});

app.controller("formController", function($scope, wordFactory, $location) {
		//Button submit function
		$scope.createMadLib = function() {
			wordFactory.wordList.push($scope.dayOfWeek);
			wordFactory.wordList.push($scope.verb1);
			wordFactory.wordList.push($scope.noun1);
			wordFactory.wordList.push($scope.noun2);			
			wordFactory.wordList.push($scope.name);			
			wordFactory.wordList.push($scope.adj1);			
			wordFactory.wordList.push($scope.adj2);			
			wordFactory.wordList.push($scope.possessive);			
			wordFactory.wordList.push($scope.noun3);			
			wordFactory.wordList.push($scope.noun4);			
			wordFactory.wordList.push($scope.adj3);
				
			console.log(wordFactory.wordList);
				
			// Clear the item input boxes
			$scope.dayOfWeek = "";
			$scope.verb1 = "";
			$scope.noun1 = "";
			$scope.noun2 = "";
			$scope.name = "";
			$scope.adj1 = "";
			$scope.adj2 = "";
			$scope.possessive = "";
			$scope.noun3 = "";
			$scope.noun4 = "";
			$scope.adj3 = "";
			
			//Go to the MadLib
			$location.path("/madlib");
		};
});

app.controller('madLibController', function($scope, wordFactory, $location) {
  $scope.dayOfWeek = wordFactory.wordList[0];
  $scope.verb1 = wordFactory.wordList[1];
  $scope.noun1 = wordFactory.wordList[2];
  $scope.noun2 = wordFactory.wordList[3];
  $scope.name = wordFactory.wordList[4];
  $scope.adj1 = wordFactory.wordList[5];
  $scope.adj2 = wordFactory.wordList[6];
  $scope.possessive = wordFactory.wordList[7];
  $scope.noun3 = wordFactory.wordList[8];
  $scope.noun4 = wordFactory.wordList[9];
  $scope.adj3 = wordFactory.wordList[10];
  
  $scope.playAgain = function() {
	  wordFactory.wordList = [];
	 	 //Go back to the form
	  $location.path("/form");
  };
});
		
})();