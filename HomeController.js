/**
* Home controller
* @namespace ngSphata.controllers
*/
(function () {
  'use strict';

  angular
    .module('Sphata.controllers')
    .controller('homeController', homeController);

  homeController.$inject = ['$scope', 'UserService',  '$stateParams', '$filter' ,'$location'];

  /**
  * @namespace HomeController
  */
  function homeController($scope, UserService, $stateParams, $filter ,$location) {
	var id = parseInt($stateParams.id);
	$scope.user = $filter('filter')( UserService.fetchUsers(), {'_id': id}, true);
	$scope.home=function(){
		$location.path("/");
	};	
  }
})();
