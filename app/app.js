define(function(){
	
	var module=angular.module('demoApp', []);

	module.controller('firstCtrl', ['$scope', function ($scope) {
		$scope.title="Hello Angular";
	}])

});