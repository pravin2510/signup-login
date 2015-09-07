/**
* Register controller
* @namespace ngSphata.controllers
*/
(function () {
  'use strict';

  angular
    .module('Sphata.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope', '$log', 'UserService' , '$q', '$timeout','$location'];

  /**
  * @namespace RegistrationController
  */
  function RegisterController($scope, $log, UserService, $q, $timeout, $location) 
  			{
	  
	  			$scope.add = function() {
	  			UserService.register($scope.user).then(function(value) {
				$scope.user={};
				$scope.registerForm.$setPristine();
				$location.path('/sign-in');
			 });
		};
		
	     $scope.checkMail = function(value) {
	    	 var userList = UserService.fetchUsers();
	    	 if(userList && userList.length)
	    	 {
	             return $q(function(resolve, reject) {
	                 $timeout(function() {
	                	var allUser=UserService.getUser('email', value);
	                     if (allUser && !allUser.length) {
	                    	 reject();
	                     } else {
	                    	 resolve();
	                     }
	                 }, 800);
	             });
	    	 }else{
	    		 return true;
	    	 }
	    	 
	    	   
	     };
	     
	     
	     $scope.checkUsername = function(value) {
	    	 var userList = UserService.fetchUsers();
	    	 if(userList && userList.length){
	             return $q(function(resolve, reject) {
	                 $timeout(function() {
	                	var allUser=UserService.getUser('username', value);
	                     if (allUser && !allUser.length) {
	                    	 reject(); 
	                     } else {
	                    	 resolve();
	                     }
	                 },
	                 
	                 800);
	             
	             });
	             
	    	 }
	    	 		else
	    	 {
	    		 return true;
	    
	    	 }
	     };
	     
	     
	}
})();
