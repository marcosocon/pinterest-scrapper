(function(){
	'use strict';
		angular
			.module('app')
				.controller('MainCtrl', MainCtrl);
				MainCtrl.$inject = ['$scope','$http'];
				function MainCtrl($scope, $http){
					$scope.model = "modelo";
				}

})();
