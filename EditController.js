  /**
* Login controller
* @namespace ngSphata.controllers
*/
(function () {
  'use strict';

  angular
    .module('Sphata.controllers')
    .controller('editCtrl', editCtrl);

  editCtrl.$inject = ['$scope', 'UserService' ,'$modalInstance','$filter'];

  /**
  * @namespace LoginController
  */
  function editCtrl($scope, UserService, $modalInstance, $filter) {
	 $scope.lists=UserService.fetchUsers();
	 var id = angular.fromJson(sessionStorage.getItem('userid'));
	 delete sessionStorage.userid;
	 $scope.users = $filter('filter')( UserService.fetchUsers(), {'_id': id}, true);
	     $scope.cancel = function () {
	    	    $modalInstance.dismiss('cancel');
	    	  };
	    
	     $scope.save = function (obj) {
	    	 $scope.user=obj;
	    	 UserService.edit($scope.user);
	    	 window.location.reload();
	    	 $modalInstance.dismiss('cancel');
		    	  };
  }
})();
