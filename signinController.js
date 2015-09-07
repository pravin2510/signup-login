/**
* Login controller
* @namespace ngSphata.controllers
*/
(function () {
  'use strict';

  angular
    .module('Sphata.controllers')
    .controller('SigninController', SigninController);

  SigninController.$inject = ['$scope', 'UserService' ,'$location'];

  /**
  * @namespace LoginController
  */
  function SigninController($scope, UserService, $location) {
	  $scope.user={};
		$scope.signin = function() {
			UserService.login($scope.user).then(function(id) {
				$location.path("/user-home/"+id);
			}, function() {
				alert("Invalid User");
			});
		};
    
  }
})();
