var app = angular.module('madLibApp');

app.factory('wordFactory', function() {
	return {
		wordList: []
	};
});