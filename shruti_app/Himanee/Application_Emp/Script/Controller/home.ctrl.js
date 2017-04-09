angular.module('myApp').controller('Homecontroller',function($scope,$rootscope,$location){
	console.log('inside home')

    $rootscope.employee=[
    {
        userId:'1',
        firstName:'Himanee',
        jobTitleName:'PA',
        phoneNumber:'8100656182'
    },
    {
         userId:'2',
        firstName:'Pallavi',
        jobTitleName:'PA',
        phoneNumber:'8173936182'
    },
    {
         userId:'3',
        firstName:'Amit',
        jobTitleName:'PA',
        phoneNumber:'8100652345'
    }
    ]
    $scope.delEmplyee = function(x){
		$rootScope.employees.splice(x,1);
	}
  $scope.logout = function()
  {  
	  $location.path('/');
  }
	
});