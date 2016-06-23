(function(){
	'use strict';
		angular
			.module('app')
				.controller('MainCtrl', MainCtrl);
				MainCtrl.$inject = ['$scope','$http'];
				function MainCtrl($scope, $http){
					$scope.item={};
					$scope.showForm = true;
					$scope.showResults = false;
					$scope.loading = false;
					$scope.getData = function(){
						$http.post('/api/scraper',{
							url: $scope.item.url
						})
							.then(function(data){
								console.log('data');
								$scope.showResults = true;
							});
						};
					}


})();
