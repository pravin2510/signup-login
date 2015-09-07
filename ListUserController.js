/**
* ListUser controller
* @namespace ngSphata.controllers
*/
(function () {
  'use strict';

  angular
    .module('Sphata.controllers')
    .controller('listController', listController);

  listController.$inject = ['$scope', 'UserService','$location','$modal'];

  /**
  * @namespace ListUserController
  */
  function listController($scope, UserService,$location, $modal) {
	  var lists=this;
      lists=[];
	 $scope.lists =  UserService.fetchUsers();
	 $scope.home=function(){
			$location.path("/");
	 };
	 $scope.edit = function(list) {
		 UserService.getid(list);
		 var modalInstance = $modal.open({
			 animation: $scope.animationsEnabled,
		      templateUrl: "views/edit-user.html",
		      controller: "editCtrl",
		    });
		};
	
			 

	    $scope.remove = function(list) {
	    	if (confirm('Are you sure you want to delete the user')) {
	    		var index=$scope.lists.indexOf(list);
		        $scope.lists.splice(index, 1);
		        delete sessionStorage.users;
		        sessionStorage.setItem('users', angular.toJson($scope.lists)); 	
	    	} 
	    };
  }
})();
